// xu ly callback trong js
// ham goi lai callback

function readDatabase(callback) {
    var user = {
        name : "Mai hoa"
    }

    callback(user);
}

readDatabase( function (data) {
    console.log("Read done callback");
    console.log("data", data);
});

// noi khac
readDatabase(function (data) {
    console.log("Read done callback 2");
    console.log("User name:", data.name);
});