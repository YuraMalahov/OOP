"use strict";

class AbstractCarFactory {
    buyCar() {
        this._signDocuments();
        var car = this._createCar();
        this._testCar(car);
        
        return car;
    }
    
    _signDocuments() {
        console.log("sign documents");   
    }
    
    _testCar(car) {
        console.log("car tested:", car);
    }

    _createCar() {
        throw new Error("Not implemented method");
    }
}

module.exports = AbstractCarFactory;
