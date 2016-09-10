"use strict";

class CommandInterface {
    execute() {
        throw new Error("not implemented method");
    }
}

module.exports = CommandInterface;