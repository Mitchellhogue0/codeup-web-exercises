(function(){
    "use strict"

    //number - 5
    //string - "dog"
    //boolean - true/false
    //undefined - data that should be there, but isn't
    //object ->

    // var myArr = ["dog", "cat", "fish"] // //<- each within array is called element
    //
    // console.log(Array.isArray(myArr)) // //<- checks if input is array, otherwise false

    var myCharacteristics = ["Mitchell", "developer student", "21 year old"]

    // console.log(`the length of the array is ${myCharacteristics.length}`) // //<- will state how many elements are in array

    // console.log(`Hello! I am a ${myCharacteristics[2]} ${myCharacteristics[1]} named ${myCharacteristics[0]}`) // //<- the first element is index 0, the last has index of (length-1)
    //
    // console.log(myCharacteristics[3]) // //<- accessing an index out of the bounds of the array

    // myCharacteristics[0] += " Hogue";
    // console.log(myCharacteristics[0])
    //
    // for (let i = 0; i < 10; i++){
    //
    //     // // do something with ONE array element
    // }

    var myPets = ["Aspen", "Willow", "Oak"]
    // // // length = 3, however maxIndex = 2
    // for (let i = 0; i < myPets.length; i++){
    //     console.log(myPets[i]) //3
    // }

    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

    var myArray = [3, "Cydnie", true, "Demon Slayer", 1]

    //
    // function arrayFunction(myArray){
    //     for (var i = 0; i < myArray.length; i++){
    //         console.log(myArray[i]);
    //     }
    // }
    //
    // console.log(arrayFunction(myArray));

    myPets.forEach(function (pet){
        console.log(`My pet's name is ${pet}`); // // must have inline function that provides a callback
    });





})();