(function (){
    "use strict";
    var lineBreak = "---------------------"


    var i = 1;
    while(i < 65536){
        console.log(i *= 2);
    }
    console.log(lineBreak);


    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(`I have ${allCones} to sell! come buy!`)
    do{
       var conesBought = Math.floor(Math.random() * 5) + 1;
        console.log(`I want to buy ${conesBought} cones`)
        if (conesBought <= allCones){
            allCones -= conesBought;
            console.log(`${conesBought} sold, thank you!`)
        } else{
            console.log(`I'm sorry I only have ${allCones} left :(`)
        }
        console.log(`I only have ${allCones} cones left!`)
        console.log(lineBreak);
    } while(allCones > 0);

    console.log("YAY! I sold them all!")






})();