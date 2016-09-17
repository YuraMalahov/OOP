"use strict";

class Mojito {
    constructor(bacardi, lime, mint, sugar, soda, ice) {
        this._bacardi = bacardi;
        console.log("add bacardy");
        this._lime = lime;
        console.log("add lime");
        this._mint = mint;
        console.log("add mint");
        this._sugar = sugar;
        console.log("add sugar");
        this._soda = soda;
        console.log("add soda");
        this._ice = ice;
        console.log("add ice");
        
        console.log("make cocktail");
    }

    drink() {
        console.log("tasty");
    }
}

module.exports = Mojito;