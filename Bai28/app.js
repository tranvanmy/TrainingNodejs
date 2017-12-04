var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function () {
    console.log("1 mon nao do bi diem kem");
});

emitter.on("bad", function () {
    console.log("Da co diem kem, can phat thong bao cho phu huynh");
});

// co 1 bang diem 
var scores = [10, 4];

for (var s of scores) {
    if (s < 5) {
        console.log("Diem nay thap qua", s);
        emitter.emit("bad");
    }
    //insert bd
}
