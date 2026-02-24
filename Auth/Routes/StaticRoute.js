const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello From Server")
})

router.get("/about", (req, res) => {
    res.send("Hi i'm a server")
})

module.exports = router