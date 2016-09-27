"use strict";

const GumballMachine = require("./GumballMachine");

let machine = new GumballMachine(2);

machine.insertQuarter();
machine.turnCrank();
machine.insertQuarter();
machine.turnCrank();
