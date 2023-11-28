const express = require('express');

const router = express.Router();

router.get("/form", (req, res, next) => {
    console.log("Form Page entered");
    res.render("form")
})

module.exports = router