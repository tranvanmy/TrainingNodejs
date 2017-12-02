`use strict`

var EventEmitter = require("events");

module.exports = class Dialog extends EventEmitter {
    constructor() {
        super(); // khi thực hiện khởi tạo hay kế thừa gì từ emit thì phải có hàm super 
        this.message = "Hello world";
    }

    sayHello(data) {
        console.log(`${ this.message }: ${ data }`);
        this.emit("hello", data);
    }
}
