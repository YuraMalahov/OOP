"use strict";

var connection = null;

class DatabaseConnection {
    constructor(serial) {
        this._serial = serial;
        
    }
    
    getSerial() {
        return this._serial;
    }

    connection() {
        console.log("connect to database");
    }
}

function getInstance(serial) {
    if (!connection) {
        connection = new DatabaseConnection(serial);
    }
    
    return connection
}

module.exports.getInstance = getInstance;
