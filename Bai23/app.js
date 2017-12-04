var util = require("util");

var name = "Hoa";

var message = util.format("Hello, %s", name);

var demo = util.format('%s:%s', 'foo', 'bar', 'baz');

// util.log(demo);

console.log(util.isArray({}));
console.log(util.isArray(new Array));