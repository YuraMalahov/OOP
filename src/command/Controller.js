"use strict";

class Controller {
    constructor() {
        this._commands = {};
    }
    
    add(slot, command) {
        this._commands[slot] = command;
    }
    
    remove(slot) {
        this._commands[slot] = null;
    }
    
    execute(slot) {
        if (!this._commands[slot]) {
            throw new Error("slot \"" + slot + "\" is empty");
        }
        
        this._commands[slot].execute();
    }
}

module.exports = Controller;
