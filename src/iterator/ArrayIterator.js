"use strict";

const AbstractIterator = require("./AbstractIterator");

class ArrayIterator extends AbstractIterator {
    constructor(items) {
        super();
        this._items = items;
    }
}

module.exports = ArrayIterator;
