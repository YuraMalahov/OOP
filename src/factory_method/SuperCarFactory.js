"use strict";

var AbstractCarFactory = require("./AbstractCarFactory");

class SuperCarFactory extends AbstractCarFactory {
    _createCar() {
        return {
            maxSpeed: 360,
            color: "black",
            wheelsDiameter: 17,
            horsepower: 700
        };
    }
}

module.exports = SuperCarFactory;
