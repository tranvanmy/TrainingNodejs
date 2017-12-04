var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'application/json' });

    var obj = {
        firstName : "Hoa",
        lastName : "Mai"
    }
    
    res.end(JSON.stringify(obj)); // ham stringify dung de convent 1 doi tuong sang dang string co the hien thi duoc
    // tren trinh duyet

}).listen(8080, "127.0.0.1");