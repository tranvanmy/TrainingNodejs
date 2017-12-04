var obj = {
    sayHello: "Hello"
}

console.log(obj.sayHello);

console.log(obj['sayHello']);

 var prop = "sayHello";

 console.log(obj[prop]);
 
 //function va arrays

 var arr = []; 

 arr.push(function() {
     console.log("Hello nodejs 1");
 });

 arr.push(function() {
    console.log("Hello nodejs 2");
});

arr.push(function() {
    console.log("Hello nodejs 3");
});
 
arr[1]();

console.log("===========");
//for
arr.forEach(function (item) {
    item();
})