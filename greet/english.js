var greetings = require("./greetings.json");

var sayHello = function () {
	console.log(greetings.en);
}

// dung de chia se file js nay 

module.exports = sayHello;