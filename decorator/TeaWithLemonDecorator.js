"use strict";

var AbstractTeaDecorator = require("./AbstractTeaDecorator");

class TeaWithLemonDecorator extends AbstractTeaDecorator {
    cost() {
        return super.cost() + 0.1;
    }
}

module.exports = TeaWithLemonDecorator;
