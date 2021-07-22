"use strict";

var ObserverInterface = require("./ObserverInterface");

class Phone extends ObserverInterface {
    update(data) {
        console.log("Phone:", data);
    }
}

module.exports = Phone;