const jwt = require("jsonwebtoken")
const secret = '2993c5a1964d6580df772f83a259a864ff5af8f18ecc48c907caea8477488a0c'

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