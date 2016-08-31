"use strict";

var CarInterface = require("./CarInterface");

class CarX6B extends CarInterface {
    drive() {
        console.log("X6 B");
    }
}

module.exports = CarX6B;
