"use strict";

const HasQuarterState = require("./HasQuarterState");
const NoQuarterState = require("./NoQuarterState");
const SoldOutState = require("./SoldOutState");
const SoldState = require("./SoldState");

class GumballMachine {
    constructor(gumballsNumber) {
        this._states = {
            HasQuarterState: new HasQuarterState(this),
            NoQuarterState: new NoQuarterState(this),
            SoldOutState: new SoldOutState(this),
            SoldState: new SoldState(this)
        };

        this._count = 0;
        this._state = this._states["SoldOutState"];
        if (gumballsNumber > 0) {
            this._count = gumballsNumber;
            this._state = this._states["NoQuarterState"];
        }
    }

    insertQuarter() {
        this._state.insertQuarter();
    }

    ejectQuarter() {
        this._state.ejectQuarter();
    }

    turnCrank() {
        this._state.turnCrank();
        this._state.dispense();
    }

    setState(state) {
        this._state = state;
    }

    getState(stateName) {
        return this._states[stateName];
    }

    releaseBall() {
        if (this._count !== 0) {
            console.log("Gumball");
            this._count--;
        }
    }

    count() {
        return this._count;
    }
}

module.exports = GumballMachine;
