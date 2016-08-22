"use strict";

var ObserverInterface = require("./ObserverInterface");

class Radio extends ObserverInterface {
    update(data) {
        console.log("Radio:", data);
    }
}

module.exports = Radio;