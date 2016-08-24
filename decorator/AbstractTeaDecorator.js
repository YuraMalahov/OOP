"use strict";

var TeaInterface = require("./TeaInterface");

class AbstractTeaDecorator extends TeaInterface {
    constructor(tea) {
        super();
        this._tea = tea;
    }

    cost() {
        return this._tea.cost();
    }
}

module.exports = AbstractTeaDecorator;
