const express = require("express");
const app = express();
const dotenv = require("dotenv"); // Add this line to require dotenv

// Load environment variables from a .env file
dotenv.config();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const BASE_URL = process.env.BASE_URL || `http://localhost:${port}`;

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

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    console.log("Home Page entered");
    res.render('index', { title: "Mini Messageboard", messages: messages, BASE_URL: BASE_URL });
});

app.get("/new", (req, res, next) => {
    console.log("New Page entered");
    res.render("new", { BASE_URL: BASE_URL });
});


app.post("/new", (req, res, next) => {
    console.log(req.body);
    const { author, message } = req.body;
    messages.push({ user: author, text: message, added: new Date() });
    console.log("Message added:", { author, message });
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});