"use strict";

var FactoryInterface = require("./FactoryInterface");
var CarX6A = require("./CarX6A");
var CarR8A = require("./CarR8A");

class CarFactoryA extends FactoryInterface {
    createCarX6() {
        return new CarX6A();
    }

    createCarR8() {
        return new CarR8A();
    }
}

module.exports = CarFactoryA;
