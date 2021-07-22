"use strict";

const StateInterface = require("./StateInterface");

class SoldOutState extends StateInterface {
    constructor(gumballMachine) {
        super();
        this._gumballMachine = gumballMachine;
    }
    
    insertQuarter() {
        console.log("You can't insert a quarter, the machine is sold out");
    }

    ejectQuarter() {
        console.log("You can't eject, you haven't inserted a quarter yet");
    }

    turnCrank() {
        console.log("You turned, but there are no gumballs");
    }

    dispense() {
        console.log("No gumball dispense");
    }
}

module.exports = SoldOutState;

