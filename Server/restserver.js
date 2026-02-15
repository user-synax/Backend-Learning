const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const mongoose = require("mongoose")
const { timeStamp } = require("console")
const PORT = 8000

const app = express()

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/learning')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo Error", err))

// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: false
    }
}, { timestamps: true })

// Model
const User = mongoose.model("user", userSchema)

// Middlewares
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    const html = `
    <a href="http://localhost:8000/users">All Users</a>
    <a href="http://localhost:8000/api/users">JSON Users</a>
    `
    res.send(html)
})

// Routes
app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({})
    const html = `
        <ul>
            ${allDbUsers.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html)
})

// REST Routes

app.get("/api/users", async (req, res) => {
    const allDbUsers = await User.find({})
    res.json(allDbUsers)
})

app.route("/api/users/:id").get(async (req, res) => {
    const user = await User.findById(req.params.id)
    !user ? res.send("User Not Found") : ''
    return res.json(user)
}).patch(async (req, res) => {
    // const body = req.body
    await User.findByIdAndUpdate(req.params.id, {'last_name': "Changed To Default"})
    res.json({ Status: 'Success Patch' })
}).delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ Status: 'Success Delete' })
})

app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) { return res.send(400).json({ msg: "All Fields are Required..." }) }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    return res.status(201).json({ msg: "Success" })
})


app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`))