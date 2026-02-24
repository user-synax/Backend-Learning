const jwt = require("jsonwebtoken")
const secret = '@yu$h@Web@Developer#Cyber$ecuirty'

const setUser = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        secret
    )
}

const getUser = (token) => {
    if (!token) return null
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}