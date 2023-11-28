const express = require("express");

const app = express();

app.set('view engine', 'ejs'); //using a view engine to render htmls pages via express!

app.get("/", (req, res, next) => {
    console.log("Home Page entered");
    res.render('index', {text: 'world'});
})

app.listen(3000);

const formRouter = require('./routes/form')

app.use('/', formRouter);