"use strict";

var CarFactoryA = require("./CarFactoryA");
var CarFactoryB = require("./CarFactoryB");

function run(factory) {
    var r8 = factory.createCarR8();
    var x6 = factory.createCarX6();
    
    r8.drive();
    x6.drive();
}

run(new CarFactoryA());
run(new CarFactoryB());
