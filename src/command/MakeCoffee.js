"use strict";

var CommandInterface = require("./CommandInterface");

class MakeCoffee extends CommandInterface {
    doSomething() {
        console.log("do something");
    }
    
    doSomethingElse() {
        console.log("do something else");
    }
    
    execute() {
        this.doSomething();
        this.doSomethingElse();
        console.log("coffee is done");
    }
}

module.exports = MakeCoffee;
