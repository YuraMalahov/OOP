"use strict";

var CommandInterface = require("./CommandInterface");

class OpenDoorCommand extends CommandInterface {
    execute() {
        console.log("door is open");
    }
}

module.exports = OpenDoorCommand;
