"use strict";

var Forecast = require("./Forecast");
var Phone = require("./Phone");
var Radio = require("./Radio");

var forecast = new Forecast();

forecast.registerObserver(new Phone());
forecast.registerObserver(new Radio());
forecast.registerObserver(new Radio());

forecast.notifyObservers("Sunny");
forecast.removeObserver(1);
forecast.registerObserver(new Phone());

forecast.notifyObservers("Windy");
