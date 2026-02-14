const HTTP = require("http");
const FS = require("fs");
const URL = require("url");
const { url } = require("inspector/promises");

const FullDate = new Date();
const Hour = FullDate.getHours();
const Minutes = FullDate.getMinutes();
const Second = FullDate.getSeconds();
const Time = `${Hour}:${Minutes}:${Second}`;

const Server = HTTP.createServer((req, res) => {
    if (req.url === "/.well-known/appspecific/com.chrome.devtools.json")
        return res.end("");
    else if (req.url === "/favicon.ico") return res.end("");
    const MyUrl = URL.parse(req.url, true);
    console.log("New Request Recived");
    FS.appendFile(
        "./logs.txt",
        `${Time}: New Request From [ ${req.url} ]\n`,
        () => {
            switch (MyUrl.pathname) {
                case "/":
                    res.end("Home Page");
                    break;
                case "/about":
                    const Username = MyUrl.query.name;
                    res.end(`
                            <body>
                            <style>
                            body{
                                background-color: black;
                                color: white;
                                font-family: sans-serif;
                            }
                            h1{
                                text-shadow: 0px 0px 5px white;
                            }
                            span{
                                color: #63e;
                                text-shadow: 0px 0px 5px #63e;
                            }
                            </style>
                            <h1>Hey, [ <span>${Username}</span> ], How Are You</h1>
                            </body>
                        `);
                    break;
                case "/search":
                    const Search = MyUrl.query.query;
                    res.end(`Search Query : [ ${Search} ]`);
                    break;
                default:
                    res.end("404 Not Found");
                    break;
            }
        },
    );
});

Server.listen(8000, () => {
    console.log("Server Started!");
});
