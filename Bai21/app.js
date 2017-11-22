
// var sayHello = require("./hello.js");
        
// sayHello();
////////////////////////////////////
// bai 20 tim hieu sau ve require
// var greet = require("./greet"); // tu dong tim den file index trong thu muc greet
//     greet.english();
//     greet.vietnamese();
/////////////////////////////////////


// BAI SO 21: CAC KY THUAT KHAI BAO VA SU DUNG MUDULE
// khai bao va su dung module Bai21(1).js 
//
var Hello =  require("./Bai21(1).js");

Hello();
/////////////////////////////////////
var Hello2 = require("./Bai21(2).js").sayHello;

Hello2();
//////////////////////////////////////
var Hello3 = require("./Bai21(3).js");

Hello3.sayHello();

Hello3.message = "Changed hell Nodejs";

var Hello32 = require("./Bai21(3).js");

Hello32.sayHello();
////////////////////////////////////
var Helle4 = require("./Bai21(4).js");

var ok = new Helle4();

ok.sayHello();
//////////////
var Hello5 = require("./Bai21(5).js").sayHello111;

Hello5();