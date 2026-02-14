const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const PORT = 8000

const app = express()

app.get("/", (req, res) => {
    const html = `
    <a href="http://localhost:8000/users">All Users</a>
    <a href="http://localhost:8000/api/users">JSON Users</a>
    `
    res.send(html)
})

// Routes
app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html)
})

// REST Routes
app.get("/api/users", (req, res) => {
    res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id == id)
    !user ? res.send("User Not Found") : ''
    return res.json(user)
})

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`))