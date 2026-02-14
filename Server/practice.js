// Super Simple HTTP Server

const HTTP = require("http");
const URL = require("url");

const SERVER = HTTP.createServer((req, res) => {
    const MyUrl = URL.parse(req.url, true);
    switch (MyUrl.pathname) {
        case "/":
            res.end("Hello From Server");
            break;
        default:
            res.end("404 Not Found");
            break;
    }
});

SERVER.listen(3535, () => {
    console.log("Server is Running...");
});
