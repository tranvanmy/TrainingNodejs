// Code khong đong bo trong nodejs

var firstFunction = function () {
    console.log("I am fist!");
}

var secondFunction = function () {
    setTimeout(firstFunction, 5000);
    console.log("I am second!");
}

secondFunction();