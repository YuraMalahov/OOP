"use strict";

var Controller = require("./Controller");
var OpenDoorCommand = require("./OpenDoorCommand");
var CloseDoorCommand = require("./CloseDoorCommand");
var MakeCoffee = require("./MakeCoffee");

var controller = new Controller();

controller.add("openDoor", new OpenDoorCommand());
controller.add("closeDoor", new CloseDoorCommand());
controller.add("makeCoffee", new MakeCoffee());

controller.execute("openDoor");
controller.execute("closeDoor");
controller.execute("makeCoffee");

controller.remove("makeCoffee");
controller.execute("makeCoffee");
