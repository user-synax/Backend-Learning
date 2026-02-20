const User = require("../models/user")

const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/")
}

module.exports = {
    handleUserSignUp
}