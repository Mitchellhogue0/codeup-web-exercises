(function() {
    "use strict";
    var lineBreak = "-----------------";

    console.log(lineBreak);
    var input = prompt("please enter a number between 1 and 50")
    while(input > 50 || input % 2 === 0) {

       input =  prompt(input + " is not within parameters, try again");
        if (input < 50 && input % 2 !== 0) {
            alert("Nice! you followed instructions");
            break;
        }

    }

    console.log(`User entered number: ${input}`)

    for (var i =0; i <=50; i++){
        if (i == input){
            console.log(`YIKES! skipping number...${input}`)
        }else if (i % 2 !== 0 && i !== input){
            console.log(`here is an odd number: ${i}`);
        }

    }


















})();

