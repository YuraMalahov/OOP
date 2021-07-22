"use strict";

var duck = require("./Duck");
var FlyBehavior = require("./fly/FlyBehavior");
var NoFlyBehavior = require("./fly/NoFlyBehavior");

var tim = duck.createDuck(new FlyBehavior());
var don = duck.createDuck(new NoFlyBehavior());

tim.fly();
don.fly();