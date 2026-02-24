const URL = require("../models/url")
const Shortid = require("shortid")

const handleGenerateNewShortURL = async (req, res) => {
    const body = req.body
    if (!body.url) return res.status(400).json({ error: "URl is Required" })
    const shortID = Shortid()
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })
    return res.render("home", {
        id: shortID
    })
}

module.exports = {
    handleGenerateNewShortURL
}