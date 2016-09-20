"use strict";

class AbstractPizza {
    prepare() {
        this.kneadDough();
        this.addIngredients();
        this.bake();
    }

    kneadDough() {
        console.log("knead dough");
    }

    addIngredients() {
        throw new Error("not implemented");
    }

    bake() {
        console.log("bake pizza");
    }
}

module.exports = AbstractPizza;
