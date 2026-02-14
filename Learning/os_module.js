const os = require("os")

console.log("Threads: ",os.cpus().length)
console.log("Machine: ",os.machine())
console.log("Platform: ",os.platform())
console.log("Hostname: ",os.hostname())