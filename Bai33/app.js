var obj = {
    name: "Mai hoa",
    sayHello: function (param1, param2) {
        console.log(`Hello ${ this.name }`);
        console.log(`Params:`, param1, param2);
    }   
}

obj.sayHello("Xin chao", "2016");

obj.sayHello.call({name: "van my"}, "xin chao", "2017");
obj.sayHello.apply({name: "van my"}, ["xin chao", "2017"]);
