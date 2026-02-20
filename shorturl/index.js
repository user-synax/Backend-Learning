const express = require("express")
const { ConnectDB } = require("./connection")
const path = require("path")
const URL = require("./models/url")
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")

const app = express()
const PORT = 8080
ConnectDB('mongodb://localhost:27017/short-url')

app.set("view engine", 'ejs')
app.set('views', path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/url", urlRoute)
app.use("/", staticRoute)
app.use("/user", userRoute)

app.get("/:shortid", async (req, res) => {
    const shortId = String(req.params.shortid)
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    )
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))