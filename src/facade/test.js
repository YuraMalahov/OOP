"use strict";

var Mojito = require("./Mojito");
var Bacardi = require("./Bacardi");
var Lime = require("./Lime");
var Mint = require("./Mint");
var Sugar = require("./Sugar");
var Soda = require("./Soda");
var Ice = require("./Ice");

var mojito = new Mojito(new Bacardi(), new Lime(), new Mint(), new Sugar(), new Soda(), new Ice());

mojito.drink();