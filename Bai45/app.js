// lam viec voi file trong node js 
//(fs)
var fs = require('fs');

var content = fs.readFileSync(__dirname + "/readme.txt", "utf8"); // doc file theo co che dong bo! dung cach nay thi 
//phai cho nhau doc het file nay moi doc file khac khong thich hop voi he thong nhieu nguoi dung
// chi phu hop khi doc nhung file co dung luong nho
//

console.log(content);
// ko dong db
// yeu cau doc file thu1 xong roi doc file thu 2

fs.readFile(__dirname + "/readme.txt", "utf8", function(err, data) {
    console.log(data);
});

console.log("Done");