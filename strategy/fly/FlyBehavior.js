"use strict";

var FlyInterface = require("./FlyInterface");

class FlyBehavior extends FlyInterface {
    fly() {
        console.log("I fly");
    }
}

module.exports = FlyBehavior;