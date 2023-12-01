const express = require("express");
const app = express();

const port = process.env.PORT || 3000; // Updated to use process.env.PORT

// Using a view engine to render HTML pages via Express!
app.set('view engine', 'ejs');

// Base URL configuration
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

// Messages array (replacement for MongoDB atm!)
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "POTATO",
        user: "Zijlboot",
        added: new Date()
    }
];

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Route for the homepage
app.get("/", (req, res, next) => {
    console.log("Home Page entered");
    res.render('index', { title: "Mini Messageboard", messages: messages })
});

// Route for the new message
app.get("/new", (req, res, next) => {
    console.log("New Page entered");
    res.render("new")
});

app.post("/new", (req, res, next) => {
    console.log(req.body); // Log the entire req.body object to the console
    const { author, message } = req.body;
    messages.push({user: author, text: message, added: new Date()});
    console.log("Message added:", { author, message });
    res.redirect("/");
});

// Renders server on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
