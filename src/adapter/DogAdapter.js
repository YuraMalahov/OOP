"use strict";

var DogInterface = require("./DogInterface");

class DogAdapter extends DogInterface {
    constructor(cat) {
        super();
        this._cat = cat;
    }
    
    bark() {
        this._cat.meow();
    }
}

module.exports = DogAdapter;
