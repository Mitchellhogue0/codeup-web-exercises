"use strict";

var lineBreak = "------------------------------------"
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a, b, c);

var d = "hello";
var e = false;

d++;
e++;
console.log(d,e);

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);

var price = 2.7;
console.log(price.toFixed(2));

// var price = "2.7";
// price.toFixed(2);
// console.log(price);


isNaN(0)
console.log(isNaN(0));
isNaN(1)
console.log(isNaN(1));
isNaN("")
console.log(isNaN(""));
isNaN("string")
console.log(isNaN("string"));
isNaN("0")
console.log(isNaN("0"));
isNaN("1")
console.log(isNaN("1"));
isNaN("3.145")
console.log(isNaN("3.145"));
isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE));
isNaN(Infinity)
console.log(isNaN(Infinity));
isNaN("true")
console.log(isNaN("true"));
isNaN(true)
console.log(isNaN(true));
isNaN("false")
console.log(isNaN("false"));
isNaN(false)
console.log(isNaN(false));
// to illustrate why the isNaN() function is needed:
NaN == NaN
console.log(NaN == NaN);


!true
console.log(!true);

!false
console.log(!false);

!!true
console.log(!!true);

!!false
console.log(!!false);

!!0
console.log(!!0);

!!-0
console.log(!!-0);

!!1
console.log(!!1);

!!-1
console.log(!!-1);

!!0.1
console.log(!!0.1);

!!"hello"
console.log(!!"hello");

!!""
console.log(!!"");

!!''
console.log(!!'');

!!"false"
console.log(!!"false");

!!"0"
console.log(!!"0");

console.log(lineBreak); //----------

var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

sample += " " + "Students";
console.log(sample);

var sample2 = sample.replace(/Students/g, "Class");
console.log(sample2);

console.log(sample2.indexOf("C"));

var sample3 = sample2.substring(6, 12);
console.log(sample3);

console.log(lineBreak); //-----------------------

var theLittleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var pricePerDay = 3;

console.log((theLittleMermaid*pricePerDay) + (brotherBear*pricePerDay) + (hercules*pricePerDay));

var google = 400;
var amazon = 380;
var facebook = 350;
var week = 7;

console.log((google*week) + (amazon*week) + (facebook*week));

var classFull = 28;
var schedConflict = false;
if ( classFull < 30 && schedConflict === false) {

console.log("You can enroll!");
}

var buy = 2;
var hasNotExpired = false;
var premiumAccount = false;

if (premiumAccount === true) {
    console.log("Product offer accepted!")
} else ((buy >= 2 && hasNotExpired === false)); {
    console.log("Product offer accepted!")
}

console.log(lineBreak); //-----------------------------


var username = 'codeup';
var password = 'notastrongpassword';

var check = (password >= 5)
    && (password !== username)
    && (username <= 20)
    && (username.trim())
    && (password.trim());
console.log(check);



