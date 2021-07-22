"use strict";

var Cat = require("./Cat");
var Dog = require("./Dog");
var DogAdapter = require("./DogAdapter");

var dog = new Dog();
var catLikeDog = new DogAdapter(new Cat());

function voice(animal) {
    animal.bark();
}

voice(dog);
voice(catLikeDog);
