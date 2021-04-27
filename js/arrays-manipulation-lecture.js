(function() {
    "use strict";
    var lineBreak = "------------------------"
    // TODO
    // -> .length - SUPER IMPORTANT!
    // -> .forEach() ALSO IMPORTANT!
    // -> FOR LOOP - STILL IMPORTANT!

    var days = ["Monday", "Tuesday", "Wednesday"];
    //
    // console.log(days)
    //
    // var newLength = days.push("Thursday");
    // console.log(newLength);
    //
    // console.log(days.indexOf("Wednesday"))
    //
    // var removeElement = days.pop(); // // always put into a variable if you want to track the element, or else it will be gone
    //
    // console.log(removeElement)
    // console.log(days)

    // TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array


    var daysRemain = ["Thursday", "Friday", "Saturday", "Sunday"];

    daysRemain.forEach(function (day){
        // console.log(`One of the days that remain: ${day}`);
        var daysCombined = days.push(day);
    });

    // console.log(days);


    // // .unshift(valueToAdd)
    // // start 0, 1, 2, 3
    // // unshift
    // // w/ new 0, 1, 2, 3, 4
    // //        ^ new element
    //
    // var numArray = [1, 2, 3, 4, 5];
    //
    // console.log(numArray)
    //
    // numArray.unshift(6);
    // console.log(numArray)
    //
    // var sortedArray = numArray.sort();
    // console.log(numArray)

    // var daysOfTheMonth = [...Array(32).keys()]; // // easy way to set a certain number of elements in array
    // console.log(daysOfTheMonth)
    //
    // var removedDay = daysOfTheMonth.shift();
    // console.log("this day was removed: " + removedDay)
    // console.log(daysOfTheMonth)


    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array

    var reversedArray = [];

    function reverseWeek(days){
       var limit = (days.length)
        for (var i = 0; i< limit; i++){
            console.log(days)
            console.log(lineBreak)
            var popped = days.pop();
            console.log(lineBreak)
           reversedArray.push(popped);
            console.log(reversedArray)
            console.log(lineBreak)
        }
    }

    reverseWeek(days);



    function sortMyNums(num1,num2,num3, num4, num5){
        var numsArray = [num1,num2,num3, num4, num5];
        console.log(numsArray);
        numsArray.sort(function (a,b){
            console.log(a)
            console.log(b)
            console.log(a-b);
            return a - b;                   // // a - b will return in numerical order, b - a will return reverse order
        });
        console.log(numsArray);
        return numsArray;
    }

    sortMyNums(14, 63, 1009, 345, 4011);

    function giveMissyJustice(notASuspectString){
        var musicalGenius = notASuspectString.split('');

        console.log(musicalGenius)

        musicalGenius.reverse()

        var reverseString = musicalGenius.join('');

        console.log(reverseString);
    }

    giveMissyJustice("i put my string down, flip it and reverse it")






})();