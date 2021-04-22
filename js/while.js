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
       var conesLeft = allCones - conesBought;
        allCones -= conesBought;
       if (allCones !== 0){
            console.log(`${conesBought} sold, thank you!`)
        }
        if (conesBought >= 6){
            console.log(`I cannot sell you ${conesBought}...` )
        }
        console.log(`I only have ${conesLeft} cones left!`)
        console.log(lineBreak);
        if (conesBought > conesLeft){
            console.log(`I'm sorry I only have ${conesLeft} left :(`)
        }
    } while(allCones >= 0);

    console.log("YAY! I sold them all!")






})();