"use strict";

const Composite = require("./Composite");
const Leaf = require("./Leaf");

let root = new Composite("root");
let level1 = new Composite("level 1");
let level1_2 = new Composite("level 1-2");
let level2 = new Composite("level 2");
let level3 = new Composite("level 3");

root.add(new Leaf("leaf 1"));
root.add(new Leaf("leaf 2"));
root.add(level1);
root.add(level1_2);

level1.add(new Leaf("leaf 3"));
level1.add(new Leaf("leaf 4"));
level1.add(level2);

level1_2.add(new Leaf("leaf 5"));
level1_2.add(new Leaf("leaf 6"));

level2.add(new Leaf("leaf 7"));
level2.add(new Leaf("leaf 8"));
level2.add(level3);

level3.add(new Leaf("leaf 9"));
level3.add(new Leaf("leaf 10"));

root.print();
console.log("-----------------");
root.getChild(0).print();
root.getChild(1).print();
console.log("-----------------");
root.getChild(2).print();
