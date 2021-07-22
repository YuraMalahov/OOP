"use strict";

const StateInterface = require("./StateInterface");

class NoQuarterState extends StateInterface {
    constructor(gumballMachine) {
        super();
        this._gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("You insert a quarter");
        this._gumballMachine.setState(this._gumballMachine.getState("HasQuarterState"));
    }

    ejectQuarter() {
        console.log("You haven't insert a quarter");
    }

    turnCrank() {
        console.log("You turned, but there's no quarter");
    }

    dispense() {
        console.log("You need to pay first");
    }
}

module.exports = NoQuarterState;
