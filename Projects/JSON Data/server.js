const express = require("express")

const app = express()
const PORT = 8000

const userRoute = require("./Routes/users.route")
const productRoute = require("./Routes/products.route")


app.use("/api", userRoute)
app.use("/api", productRoute)

app.listen(PORT, () => {
    console.log(`Direct URL: http://localhost:${PORT}`)
    console.log(`Server Running on PORT: ${PORT}`)
})