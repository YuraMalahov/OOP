"use strict";

const AbstractIterator = require("./AbstractIterator");

class ObjectIterator extends AbstractIterator {
    constructor(items) {
        super();
        this._items = Object.keys(items).map(function (key) {
            return {
                type: key,
                value: items[key]
            };
        });
    }
}

module.exports = ObjectIterator;
