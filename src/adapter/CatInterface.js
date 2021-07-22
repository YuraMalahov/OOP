"use strict";

class CatInterface {
    meow() {
        throw new Error("not implemented");
    }
}

module.exports = CatInterface;
