"use strict";

var CarInterface = require("./CarInterface");

class CarR8B extends CarInterface {
    drive() {
        console.log("R8 B");
    }
}

module.exports = CarR8B;
