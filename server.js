//Loading express and rendering routing pages
const express = require("express");
const app = express();

//messages array!
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

//using a view engine to render htmls pages via express!
app.set('view engine', 'ejs');

//route form homepage
app.get("/", (req, res, next) => {
    console.log("Home Page entered");
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

//route for new message
app.get("/new", (req, res, next) => {
    console.log("new Page entered");
    res.render("new")
})
//renders server on port 3000
app.listen(3000);