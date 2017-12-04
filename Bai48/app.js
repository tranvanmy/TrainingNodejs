// lam viec voi stream
var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024
});

var writable = fs.createWriteStream(__dirname + "/read2.txt");
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz");

var gzip = zlib.createGzip();
// copy
readable.pipe(writable);

//compress

readable.pipe(gzip).pipe(compressed);