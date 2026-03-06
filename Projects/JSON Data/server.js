const express = require("express")

const app = express()
const PORT = 8000

const userRoute = require("./Routes/users.route")


app.use("/api", userRoute)

app.listen(PORT, () => {
    console.log(`Direct URL: http://localhost:${PORT}`)
    console.log(`Server Running on PORT: ${PORT}`)
})