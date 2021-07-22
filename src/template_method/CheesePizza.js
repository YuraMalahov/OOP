"use strict";

var AbstractPizza = require("./AbstractPizza");

class CheesePizza extends AbstractPizza {
    addIngredients() {
        console.log("add cheese");
    }
}

module.exports = CheesePizza;
