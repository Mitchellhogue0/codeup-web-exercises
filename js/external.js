"use strict";

alert("Welcome to my website!");

var favColor = prompt("What is your favorite color?").toUpperCase();
if (favColor === "green".toUpperCase()) {
    alert("Hey, that's mine too!");
} else {
    alert("Your favorite color is: " + favColor);
}
