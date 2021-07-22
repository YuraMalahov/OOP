"use strict";

var TeaInterface = require("./TeaInterface");

class Tea extends TeaInterface {
    cost() {
        return 1.0;
    }
}

module.exports = Tea;
