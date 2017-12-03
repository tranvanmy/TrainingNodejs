//Buffer
var buffer = new Buffer("Xin chao", "utf8");

console.log(buffer);

console.log(buffer.toString());

console.log( buffer.toString("ascii"));

console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write("vanmy");

console.log(buffer.toString());
