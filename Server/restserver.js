const express = require("express")
const { connectMongoDB } = require("./connection.js")
const userRouter = require("./routes/user")

const app = express()
const PORT = 8000

// Connection
connectMongoDB('mongodb://localhost:27017/learning')

// Middlewares
app.use(express.urlencoded({ extended: false }))

// Route
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`))