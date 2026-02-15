const mongoose = require("mongoose")

const connectMongoDB = async (url) => {
    return mongoose.connect(url)
    .then(() => {console.log("MongoDB Connected")})
    .catch(() => {console.log("Error While Connection")})
}

module.exports = {
    connectMongoDB
}