(function() {
    "use strict";

    var lineBreak = "--------------------------"
    function firstAndSecond(str) {
        return str.slice(0, 2);
    }

    console.log(firstAndSecond([1,2,3,4]));
    console.log(lineBreak);

    function sumAll(str) {
       var sum = str.reduce((a, b) => a + b)
        return sum / str.length;
    }

    console.log(sumAll([1,2,3,4]));
    console.log(lineBreak)

    // // exercise 62
    function median(str) {
        var half = Math.floor(str.length / 2);

        if (str.length % 2)
            return str[half];

        return (str[half - 1] + str[half]) / 2.0;
    }

    console.log(median([1,2,3]))
    console.log(lineBreak)

    function maxMinusMin (str){
        return (Math.max(...str)) - (Math.min(...str))
    }

    console.log(maxMinusMin([1, 2, 2, 8, 3, 4]))
    console.log(lineBreak)

    function productOfAll(str) {
        var pro = str.reduce((a, b) => a * b)
        return pro;
    }

    console.log(productOfAll([1,2,3]))
    console.log(lineBreak)

    function getHighestNumber (str){
        return(Math.min(...str))
    }

    function onlyOddNumbers (str){
        let odds = str.filter(x => x%2)
        return odds;
    }

    console.log(onlyOddNumbers([1,2,3,4,5,6,7]))
    console.log(lineBreak)


    // function onlyEvenNumbers (str){
    //     return str.filter((a,i)=>i%2===1);
    // }
    function onlyEvenNumbers(array){
        let arr = [];
        for (let i = 0; i < array.length; i++){
            if (array[i] % 2 === 0){
                arr.push(array[i]);
            }
        }
        return arr;
    }
    console.log(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
    console.log(lineBreak)


    function onlyPositiveNumbers (str){
        return str.filter(x => x > 0);
    }

    console.log(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
    console.log(lineBreak)


    function onlyNegativeNumbers (str){
        return str.filter(x => x < 0);
    }

    console.log(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
    console.log(lineBreak)

    let count = 0;
    function countEvens(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 === 0) {
                count++;
            }

        }
        return count;
    }
    console.log(countEvens([5,6,7,8]))
    console.log(lineBreak)



    function onlyPositiveEvens (str){
        return str.filter(x => x > 0 && x *2 === 0);
    }

    console.log(onlyPositiveEvens([2,-5,-6]))
})();
