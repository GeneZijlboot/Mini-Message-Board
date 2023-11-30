//Loading express and rendering routing pages
const express = require("express");
const app = express();

//using a view engine to render htmls pages via express!
app.set('view engine', 'ejs');

//messages array (replacement for mongoDB atm!)
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

//route form homepage
app.get("/", (req, res, next) => {
    console.log("Home Page entered");
    res.render('index', { title: "Mini Messageboard", messages: messages })
});

//route for new message
app.get("/new", (req, res, next) => {
    console.log("new Page entered");
    res.render("new")
});

app.post("/new", (req, res, next) => {
    console.log(req.body); // Log the entire req.body object to the console
    const { author, message } = req.body;
    messages.push({text: author, user: message, added: new Date()});
    console.log("Message added:", { author, message });
    res.redirect("/");
});

//renders server on port 3000
app.listen(3000);