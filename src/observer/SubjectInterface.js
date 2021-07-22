"use strict";

class SubjectInterface {
    registerObserver(observer) {
        throw new Error("not implemented method");
    }
    removeObserver(index) {
        throw new Error("not implemented method");
    }
    notifyObservers() {
        throw new Error("not implemented method");
    }
}

module.exports = SubjectInterface;