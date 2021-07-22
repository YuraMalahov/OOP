"use strict";

class FactoryInterface {
    createCarX6() {
        throw new Error("method not implemented");
    }
    
    createCarR8() {
        throw new Error("method not implemented");
    }
}

module.exports = FactoryInterface;
