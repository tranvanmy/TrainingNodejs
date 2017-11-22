//emitter.js 

function Emitter() {
    this.events = {};
}


Element.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function () {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exporst = Emitter;