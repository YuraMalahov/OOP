"use strict";

var CommandInterface = require("./CommandInterface");

class CloseDoorCommand extends CommandInterface {
    execute() {
        console.log("door is closed");
    }
}

module.exports = CloseDoorCommand;
