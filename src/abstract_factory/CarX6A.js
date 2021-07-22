"use strict";

var CarInterface = require("./CarInterface");

class CarX6A extends CarInterface {
    drive() {
        console.log("X6 A");
    }
}

module.exports = CarX6A;
