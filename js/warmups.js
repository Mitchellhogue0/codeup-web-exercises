(function() {
    "use strict";


    // // Make a function named trim(string) that removes empty spaces before and after the input.

    //
    // function trim (str){
    //     return str.trim();
    // }
    //
    // console.log(trim("      hello world     "))

    // Write a function named cube(n) that returns n * n * n
    // Write a function named cubeRoot(n) that returns the cube root of the input

    // function cube(n) {
    //     return n * n * n;
    // }
    //
    //
    // function cubeRoot (n) {
    //    return (n / 3) / 3;
    // }
    //
    // console.log(cube(3))
    // console.log(cubeRoot(27))
    // console.log(cubeRoot(cube(3)))


   //Write a function called last(input) that returns the last character of a string

    // function last(input) {
    //     return input.charAt(input.length - 1)
    // }
    //
    // console.log(last("hello, world"))
    // console.log(last("This is a warmup!"))

    // Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
    // If either of the arguments are not a numeric string or number, return a string message indicating which argument is not a number/numeric string
    // (edited)

    function remainder (num, div){
       if (isNaN(num) || isNaN(div)){
           return "This is not a numeric string or number"
       } else if (typeof num === "string" || typeof num === "number" || typeof div === "string" || typeof div === "number"){
           return num % div;
       }

    }


    console.log(remainder(20,"hello"))

})();
