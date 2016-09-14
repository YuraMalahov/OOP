"use strict";

var CatInterface = require("./CatInterface");

class Cat extends CatInterface {
    meow() {
        console.log("meow");
    }
}

module.exports = Cat;