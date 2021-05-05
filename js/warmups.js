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

    function cube(n) {
        return n * n * n;
    }


    function cubeRoot (n) {
       return (n / 3) / 3;
    }

    console.log(cube(3))
    console.log(cubeRoot(27))
    console.log(cubeRoot(cube(3)))


   //Write a function called last(input) that returns the last character of a string

    function last(input) {
        return input.charAt(input.length - 1)
    }

    console.log(last("hello, world"))
    console.log(last("This is a warmup!"))





})();
