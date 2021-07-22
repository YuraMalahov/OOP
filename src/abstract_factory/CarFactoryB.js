"use strict";

var FactoryInterface = require("./FactoryInterface");
var CarX6B = require("./CarX6B");
var CarR8B = require("./CarR8B");

class CarFactoryB extends FactoryInterface {
    createCarX6() {
        return new CarX6B();
    }

    createCarR8() {
        return new CarR8B();
    }
}

module.exports = CarFactoryB;
