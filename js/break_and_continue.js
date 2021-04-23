(function() {
    "use strict";


    var i = prompt("please enter a number between 1 and 50")
    while(i > 50 || i % 2 === 0) {
        prompt(i + " is not within parameters, try again");
        if (i < 50 || i % 2 !== 0) {
            console.log("Nice! you followed instructions");
        }
        break;
    }

















})();

