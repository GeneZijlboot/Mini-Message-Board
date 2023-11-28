const express = require("express");

const app = express();

app.set('view engine', 'ejs'); //using a view engine to render htmls pages via express!

app.get("/", (req, res, next) => {
    console.log("Running");
    res.render('index');
})

app.listen(3000);
