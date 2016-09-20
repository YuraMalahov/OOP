"use strict";

var AbstractPizza = require("./AbstractPizza");

class VeggiePizza extends AbstractPizza {
    addIngredients() {
        console.log("add veggies");
    }
}

module.exports = VeggiePizza;
