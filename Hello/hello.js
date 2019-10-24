// ØVNING 1
// console.log("hello", "world");
// console.log('Node.js FTW!');

var http = require('http');

http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/plain'});

res.end('Hello, World Wide Webb!');

}).listen(1337);

console.log("Server startad, besök mig via localhost:1337");