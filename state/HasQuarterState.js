"use strict";

const StateInterface = require("./StateInterface");

class HasQuarterState extends StateInterface {
    constructor(gumballMachine) {
        super();
        this._gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("You can't insert another quarter");
    }

    ejectQuarter() {
        console.log("Quarter returned");
        this._gumballMachine.setState(this._gumballMachine.getState("NoQuarterState"));
    }

    turnCrank() {
        console.log("You turned...");
        this._gumballMachine.setState(this._gumballMachine.getState("SoldState"));
    }

    dispense() {
        console.log("No gumball dispense");
    }
}

module.exports = HasQuarterState;
