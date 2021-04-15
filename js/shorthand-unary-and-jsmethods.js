"use strict";

//SHORTHAND ASSIGNMENT OPERATORS

//+= / -=

var name = "Mitchell";

name += " " + "Hogue";
console.log(name);

var daysRemainingInCohort = 114;

daysRemainingInCohort -= 4;

console.log(daysRemainingInCohort);

//MINI EXERCISE

// console.log(3 + 1); //addition operator
var result1 = 3;
console.log(result1 += 1);
// console.log(5 - 1); //subtraction operator
var result2 =5;
console.log(result2 -= 1);
// console.log(4 * 1); //multiplication operator
var result3 = 4;
console.log(result3 *= 1);
// console.log(12 / 3); //division operator
var result4 = 12;
console.log(result4 /= 3);
// console.log(24 % 5); //modulus operator
var result5 = 24;
console.log(result5 %= 5);

//BUILT IN JS METHODS

//toString();

var num = 5 * 5;

console.log(typeof num.toString());

//toFix();

var pi = 3.1415926535;

console.log(pi.toFixed(6));

//Number();

console.log(Number("1234"));

//isNaN() checks to see if value is not-a-number

console.log(isNaN("Mitchell"));

//parseInt();

console.log(parseInt("123412 1232"));

//.length;

console.log("hello world".length);

console.log("hello world".indexOf("w"));







