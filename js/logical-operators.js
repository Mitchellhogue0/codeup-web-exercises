"use strict";

var hasFur = true;
var hasWhisk = true;
var nameIsAspen = true;

// var isMyDog;
//
// if (hasFur); {
//
//     if (hasWhisk) {
//                                      //a lot of code that can be rewritten
//         if (nameIsAspen) {
//             console.log("That's my girl!")
//         }
//     }
// }

if (hasFur && hasWhisk && nameIsAspen) { //LOGICAL AND (&&)

    console.log("That's my girl!")
}

//---------------- LOGICAL OR (||)

var creditScore = 728;
var cashOnHand = 5000;

if (creditScore > 680 || cashOnHand > 3000) {
    console.log("Congrats! New car!");
}

var hasReqScoreOrCash = (creditScore > 680 || cashOnHand > 3000);

var lengthOfEmployment = 6;

var hasAdequateEmployment = (lengthOfEmployment >=6);

if (hasReqScoreOrCash && hasAdequateEmployment) {
    console.log("Okay fine, take the car");
}

//----- LOGICAL NOT (!)

console.log("the inverted value is " + !true);

console.log("check this weird thing out: " + !0);

