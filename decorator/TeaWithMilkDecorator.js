"use strict";

var AbstractTeaDecorator = require("./AbstractTeaDecorator");

class TeaWithMilkDecorator extends AbstractTeaDecorator {
    cost() {
        return super.cost() + 0.2;
    }
}

module.exports = TeaWithMilkDecorator;
