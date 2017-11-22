function Person() {
    this.message = "Hello node js"; 
    this.sayHello = function() {
        console.log(this.message);
    }
}

module.exports = Person;
