"use strict";

var SubjectInterface = require("./SubjectInterface");

class Forecast extends SubjectInterface {
    constructor() {
        super();
        this._observers = [];
    }

    registerObserver(observer) {
        var i = 0;
        while (i < this._observers.length) {
            if (this._observers[i] === null) {
                break;
            }
            i++;
        }
        this._observers[i] = observer;
        
        return i;
    }

    removeObserver(index) {
        this._observers[index] = null;
    }

    notifyObservers(data) {
        this._observers.forEach(function (observer) {
            if (observer !== null) {
                observer.update(data);
            }
        });
    }
}

module.exports = Forecast;