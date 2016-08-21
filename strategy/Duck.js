"use strict";

var FlyInterface = require("./fly/FlyInterface");

class Duck extends FlyInterface {
    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    
    fly() {
        this.flyBehavior.fly();
    }
}

function createDuck(flyBehavior) {
    var duck = new Duck();
    duck.setFlyBehavior(flyBehavior);
    
    return duck;
}

module.exports.createDuck = createDuck;
module.exports.Duck = Duck;