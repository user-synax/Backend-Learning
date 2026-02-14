const FS = require("fs");

// Create New File
FS.writeFileSync(
    "../test.txt",
    "Hello i'm created using Node Js [ FS ] Module",
);

// Read Files
let a = FS.readFileSync("./contacts.txt", "utf-8");
console.log(a);

// Append New Data to a File
FS.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

let Stats = FS.statSync("./test.txt")
console.log(Stats)