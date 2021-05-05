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
        return str.filter(x => x > 0 && x % 2 === 0);
    }

    console.log(onlyPositiveEvens([3,3,4,6]))
    console.log(lineBreak)


    function onlyNegativeOdds (str){
        return str.filter(x => x % 2 === -1);
    }

    console.log(onlyNegativeOdds([2, -5, -6]))
    console.log(lineBreak)



    function shortestString (arr){
        arr.sort(function(a, b){
            return a.length - b.length;
        });
        return arr[0]
    }

    console.log(shortestString(["hello", "everybody"]))
    console.log(lineBreak)



    function longestString (arr){
        arr.sort(function(a, b){
            return b.length - a.length;
        });
        return arr[0]
    }

    console.log(longestString(["mary", "had", "a", "little", "lamb"]))
    console.log(lineBreak);


    function getUniqueValue (arr) {
        return arr.filter((v, i, a) => a.indexOf(v) === i)
    }


    console.log(getUniqueValue(["ant", "ant", "mosquito", "mosquito", "ladybug"]))


    function elementsTimesTwo (arr) {
        return arr.map(x => x * 2)
    }

    console.log(elementsTimesTwo([1, 2, 3]))


    function flatten (arr){
        return arr.flat();
    }

    console.log(flatten([[1, 2], [3, 4], [5, 6]]))


    function addOneToArray (arr) {
        return arr.map(x => x + 1)
    }

    console.log(addOneToArray([1, 2, 3]))


    // function totalOfBookPrices (arr) {
    //     return arr.map(price => price + price)
    //
    //     }
    const books = [
        {
            "title": "Genetic Algorithms and Machine Learning for Programmers",
            "price": 36.99,
            "author": "Frances Buontempo"
        },
        {
            "title": "The Visual Display of Quantitative Information",
            "price": 38.00,
            "author": "Edward Tufte"
        },
        {
            "title": "Practical Object-Oriented Design",
            "author": "Sandi Metz",
            "price": 30.47
        },
        {
            "title": "Weapons of Math Destruction",
            "author": "Cathy O'Neil",
            "price": 17.44
        }
    ]

    var totalOfBookPrices = function(arr) {
        var price = 0;

        for (var i = 0; i < arr.length; i++) {
            price += arr[i].price;
        }

        return price;
    }


    console.log(totalOfBookPrices(books))
    console.log(lineBreak);



    var getAverageBookPrice = function(arr) {
        var price = 0;

        for (var i = 0; i < arr.length; i++) {
            price += arr[i].price;
        }

       return price / arr.length;

    };

    console.log(getAverageBookPrice(books))
    console.log(lineBreak)


    function highestPriceBook (arr) {
        var low = {price: 37}
        var highest;
        for (var i =0; i < arr.length; i++)
        if (books[i].price > low.price){
            highest = books[i]
        }
    return highest;
    }

    console.log(highestPriceBook(books))

})();
