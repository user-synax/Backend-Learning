const Express = require("express");

const app = Express();
const PORT = 3535;

app.get("/", (req, res) => {
    res.send("Hello From ExpressJS");
});

app.get("/about", (req, res) => {
    res.send(`Hey ${req.query.name}, Welcome to About Page`);
});

app.listen(PORT);
