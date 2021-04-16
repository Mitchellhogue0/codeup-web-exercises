"use strict";

// var num = 5;
//                     //this works, but cannot be called upon again, one and done
// num = num +5;
// console.log(num);
var lineBreak = "----------------"

function add(num1, num2, num3) { //<-- parameters here
    return num1 + num2 + num3;
}

console.log("The result is: " + add(34,21, 0)) //<-- arguments here

var myNum = 12;
var myNum2 = 12;

console.log("The result is: " + add(myNum,myNum2, myNum))

console.log(lineBreak) //---------------

function subtract(num1,num2) {
    return num1 - num2;
}
console.log("The result is: " + subtract(42,21))

console.log(lineBreak) //-----------------

// MINI EXERCISE
// TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively

function multiply(num1,num2) {
    return num1 * num2;
}

console.log("The result is " + multiply(10,10));

function divide(num1,num2) {
    return num1 / num2;
}

console.log("The result is " + divide(21,7))

console.log(lineBreak); //-----------------------

//function defaults give set numbers that JS will use if user does not give number

function addWithDefaults(num1, num2 = 0) { //always lead with non-defaulted parameters, then the defaulted
    return num1 + num2;
}

console.log(addWithDefaults(10))