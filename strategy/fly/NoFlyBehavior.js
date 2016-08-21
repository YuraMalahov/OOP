"use strict";

var FlyInterface = require("./FlyInterface");

class NoFlyBehavior extends FlyInterface {
    fly() {
        console.log("I can't fly");
    }
}

module.exports = NoFlyBehavior;