"use strict";

var BusinessCarFactory = require("./BusinessCarFactory");
var SuperCarFactory = require("./SuperCarFactory");

var a5Factory = new BusinessCarFactory();
var r8Factory = new SuperCarFactory();

var carA5 = a5Factory.buyCar();
var carR8 = r8Factory.buyCar();
