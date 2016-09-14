"use strict";

var DogInterface = require("./DogInterface");

class Dog extends DogInterface {
    bark() {
        console.log("bark");
    }
}

module.exports = Dog;
