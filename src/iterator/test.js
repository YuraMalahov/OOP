"use strict";

const ArrayIterator = require("./ArrayIterator");
const ObjectIterator = require("./ObjectIterator");

function print(arr) {
    [...arr].forEach(function (item) {
        console.log(item.type, item.value);
    });
}

let arrItems = [{
    type: 'a',
    value: 1
}, {
    type: 'b',
    value: 2
}, {
    type: 'c',
    value: 3
}];
let objItems = {
    'x': 24,
    'y': 25,
    'z': 26
};

let arr = new ArrayIterator(arrItems);
let obj = new ObjectIterator(objItems);

print(arr);
print(obj);

