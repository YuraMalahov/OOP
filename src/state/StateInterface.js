"use strict";

class StateInterface {
    insertQuarter() {
        throw new Error("not implemented");
    }

    ejectQuarter() {
        throw new Error("not implemented");
    }

    turnCrank() {
        throw new Error("not implemented");
    }

    dispense() {
        throw new Error("not implemented");
    }
}

module.exports = StateInterface;
