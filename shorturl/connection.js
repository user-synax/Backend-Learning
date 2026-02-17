const mongoose = require("mongoose")

const ConnectDB = (url) => {
    mongoose.connect(url)
        .then(() => console.log("Connected To DB"))
        .catch((err) => console.log(`Error: ${err}`))
}

module.exports = {ConnectDB}