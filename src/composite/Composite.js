"use strict";

const AbstractComponent = require("./AbstractComponent");

class Composite extends AbstractComponent {
    constructor(name) {
        super(name);
        this._components = [];
    }
    
    print(spaces) {
        super.print(spaces);
        spaces = spaces ? spaces + 1 : 2;

        [...this].forEach(function (component) {
            component.print(spaces);
        });
    }
    
    add(component) {
        this._components.push(component);
        return this._components.length;
    }
    
    remove(number) {
        this._components.splice(number, 1);
    }
    
    getChild(number) {
        return this._components[number];
    }
    
    [Symbol.iterator]() {
        let self = this;

        return {
            next() {
                if (this.counter < self._components.length) {
                    return {
                        done: false,
                        value: self._components[this.counter++]
                    };
                }

                this.counter = 0;
                return {done: true};
            },
            counter: 0
        };
    }
}

module.exports = Composite;
