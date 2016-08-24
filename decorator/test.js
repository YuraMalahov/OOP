"use strict";

var Tea = require("./Tea");
var TeaWithMilkDecorator = require("./TeaWithMilkDecorator");
var TeaWithLemonDecorator = require("./TeaWithLemonDecorator");

var tea = new Tea();
var teaWithLemonDecorator = new TeaWithLemonDecorator(tea);
var teaWithMilkDecorator = new TeaWithMilkDecorator(teaWithLemonDecorator);

console.log(tea.cost());
console.log(teaWithLemonDecorator.cost());
console.log(teaWithMilkDecorator.cost());
