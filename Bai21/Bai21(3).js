function Person() {
    this.message = "Hello Node js !!!!"; 
    this.sayHello = function () {
        console.log(this.message);
    }
}

module.exports = new Person();