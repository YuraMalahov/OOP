"use strict";

var CarInterface = require("./CarInterface");

class CarR8A extends CarInterface {
    drive() {
        console.log("R8 A");
    }
}

module.exports = CarR8A;
