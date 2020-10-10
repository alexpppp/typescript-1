"use strict";
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
// Types
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
// Template strings
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
//console.log(sentence)
// Variable Types
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//console.log(c)
// 'any' type
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase()
// TYPE INFERENCE
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// OPTIONAL/DEFAULT PARAMETERS
