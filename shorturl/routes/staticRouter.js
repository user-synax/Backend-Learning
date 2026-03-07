const express = require("express")
const URL = require("../models/url")
const { restrictTo } = require("../Middlewares/Auth")
const router = express.Router()

router.get("/", restrictTo(["NORMAL"]), async (req, res) => {
    const allUrl = await URL.find({ createdBy: req.user._id })
    return res.render("home", {
        urls: allUrl,
    })
})

router.get("/signup", (req, res) => {
    return res.render("signup")
})

router.get("/login", (req, res) => {
    return res.render("login")
})

module.exports = router