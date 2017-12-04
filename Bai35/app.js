`use strict` // muon su dung class thi phai su dung use trick
// dung class

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }

    // dinh nghia function 
    sayHello() {
        console.log("Hello" + this.firstName + " " + this.lastName);
    }
}

var hoa = new Person("Hoa", "Mai");

hoa.sayHello();

var phuong = new Person("a", "b");

phuong.sayHello();

console.log(hoa.__proto__);