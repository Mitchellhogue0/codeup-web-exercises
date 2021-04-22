(function (){
    "use strict"

    var lineBreak = "-------------------";

    function showMultiplicationTable(num){
        for (var i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
        }

    showMultiplicationTable(9);
    console.log(lineBreak);


    // function getRandom(min, max) {
    //     return Math.random() * (max - min) + min;
    // }
    //
    // function evenOrOdd(number) {
    //     if (number % 2 === 0) {
    //         return alert(number + " is even!");
    //     } else {
    //         return alert(number + " is odd!")
    //     }
    // }
    //
    // for (var i = 0; i <= 10; i++) {
    //     getRandom(20,200);
    //     evenOrOdd(i);
    // }






})();