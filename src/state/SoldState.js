"use strict";

const StateInterface = require("./StateInterface");

class SoldState extends StateInterface {
    constructor(gumballMachine) {
        super();
        this._gumballMachine = gumballMachine;
    }

    insertQuarter() {
        console.log("Please wait, we're already giving you a gumball");
    }

    ejectQuarter() {
        console.log("Sorry, you already turned the crank");
    }

    turnCrank() {
        console.log("Turning twice doesn't get you another gumball!");
    }

    dispense() {
        this._gumballMachine.releaseBall();

        if (this._gumballMachine.count() > 0) {
            this._gumballMachine.setState(this._gumballMachine.getState("NoQuarterState"));
            return;
        }

        console.log("Out of gumballs");
        this._gumballMachine.setState(this._gumballMachine.getState("SoldOutState"));
    }
}

module.exports = SoldState;
