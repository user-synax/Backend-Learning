const User = require("../models/user")
const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../services/auth")

const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/")
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    if (!user) { return res.render("login", { msg: "Invalid Email or Password" }) }
    const sessionID = uuidv4()
    setUser(sessionID, user)
    res.cookie('uid', sessionID)
    return res.redirect("/")
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}