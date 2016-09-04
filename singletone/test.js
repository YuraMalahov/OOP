"use strict";

var DatabaseConnection = require("./DatabaseConnection");

var db = DatabaseConnection.getInstance(1);
var db2 = DatabaseConnection.getInstance(2);

console.log(db.getSerial());
console.log(db2.getSerial());
