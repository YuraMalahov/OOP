"use strict";

class AbstractComponent {
    constructor(name) {
        this._name = name;
    }
    
    getName() {
        return this._name;
    }
    
    print(spaces) {
        let space = spaces ? (new Array(spaces)).join(".") : "";

        console.log(space, this.getName());
    }
    
    add(component) {
        throw new Error("not implemented method");
    }
    
    remove(component) {
        throw new Error("not implemented method");
    }
    
    getChild(number) {
        throw new Error("not implemented method");
    }
}

module.exports = AbstractComponent;
