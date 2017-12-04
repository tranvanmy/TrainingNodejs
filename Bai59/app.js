var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    if(req.url == "/" || req.url == "/index.html") {
        console.log(req.url);
        res.writeHead(200, {'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url == "/api"){
        res.writeHead(200, {'Content-Type': 'application/json' });
        var obj = {
            firstName : "Hoa",
            lastName : "Mai"
        }
        res.end(JSON.stringify(obj)); // ham stringify dung de convent 1 doi tuong sang dang string co the hien thi duoc
        // tren trinh duyet
    } else {
        res.writeHead(404);
        res.end("NOT FOUND");
    }
}).listen(3000, "127.0.0.1", function () {
    console.log("Serve listening on: http://localhost:1337");
});