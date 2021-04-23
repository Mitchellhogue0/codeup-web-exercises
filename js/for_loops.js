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

    function rando(min,max){
            return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function evenOrOdd(number) {
        if (number % 2 === 0) {
            console.log(`${number}  is even!`);
        } else {
            console.log(number + " is odd!")
        }
    }
    for (var i = 1; i <= 10; i++ ) {
        var i2 = rando(20,200);
        evenOrOdd(i2);

    }
    console.log(lineBreak);


    for (var i =1; i <=9;i++){
        var i2 = i.toString()
        console.log(i2.repeat(i))
    }
    console.log(lineBreak)

    for (var i = 100; i >= 5; i -= 5) {
        console.log(i);
    }


})();