"use strict";

var AbstractCarFactory = require("./AbstractCarFactory");

class BusinessCarFactory extends AbstractCarFactory {
    _createCar() {
        return {
            maxSpeed: 220,
            color: "white",
            wheelsDiameter: 15,
            horsepower: 180
        };
    }
}

module.exports = BusinessCarFactory;
