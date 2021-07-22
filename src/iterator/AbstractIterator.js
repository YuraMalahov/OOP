"use strict";

class AbstractIterator {
    [Symbol.iterator]() {
        let self = this;
        
        return {
            next() {
                if (this.counter < self._items.length) {
                    return {
                        done: false,
                        value: self._items[this.counter++]
                    };
                }
        
                this.counter = 0;
                return {done: true};
            },
            counter: 0
        };
    }
}

module.exports = AbstractIterator;
