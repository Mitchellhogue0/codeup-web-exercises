(function(numOfSteps) {
    "use strict"
    var lineBreak = "----------------------------"
    // //ITERATION - repetition of process in order to generate an outcome

    // //INFINITE LOOPS - avoid at all costs! if the condition never meets false, will continue forever and crash your browser

    // //WHILE LOOPS - will continue to run code until the condition is false. check condition before running code to make sure it will hit false

      // //SYNTAX - While: js keyword that says "hey, let's start a while loop
    // // (the condition you are checking against will go inside of these parentheses)
    // // { the code to be executed WHILE (as long as) the condition is true, will live inside your curly brackets}

    // while (/*condition*/) {
    //     //body
    // // code to be executed as long as the condition continues to be true;
    // }
    numOfSteps = 0;
    while (numOfSteps <= 30) {
        console.log(`keep walking, you're currently at: ${numOfSteps} steps`);
        numOfSteps = numOfSteps + 10;
    }
    console.log("nice! hit the goal")
    console.log(lineBreak);

    var num = 25;    // //starting point
    while (num <= 50) {  // //stopping point
        console.log('num: ' + num)
        num += 5;   // //iterator
        console.log(`num plus one: ${num}`);
    }       // //num += 1 or num++

    console.log(lineBreak);

    // //lets go backwards
    var backwards = 25;
    while (backwards >= -10) {
        console.log(`starting point iteration at: ${backwards}`)
        backwards -= 5;
        console.log(`ending point iteration at: ${backwards}`)
    }

    console.log(lineBreak);


    // // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

    var evens = 0;
    while (evens < 25) {
        evens++;
        if (evens % 2 === 0) {
            console.log(`even number: ${evens}`)
        }
    }

    console.log(lineBreak);
    // var password = "correct";
    // while (userPassword !== password) {
    //     var userPassword = prompt("Please enter your password");     // //attempted mini-exercise
    //     if (userPassword !== password) {
    //         return alert("password is incorrect, please enter again");
    //     }
    // }                                            // //THE ONLY THING WRONG WITH THIS IS "return" WONT ALLOW IT TO LOOP
    // alert("welcome!")                            // //REMOVE RETURN AND IT WORKS FINE

    // var password = "correct";
    // var input = prompt("Please enter password");
    //
    // while (input !== password)
    // {
    //     alert("wrong password, try again")
    //     input = prompt("Please enter password again")
    // }
    // alert("Welcome, brother")
    //




    // function passwordCheck(){
    //     var password;
    //     while (password !== "correct"){
    //         password = prompt("enter your password")     // //another example of a correct way to do it
    //     }
    //     alert("logged in successfully")
    // }
    //
    // passwordCheck();

    // //DO WHILE LOOPS

    // //DIFFERENCE BETWEEN WHILE LOOPS AND DO WHILES-- DO WHILE LOOPS WILL ALWAYS RUN AT LEAST ONCE BEFORE THE i IS CHANGED

    /* SYNTAX
    do {
        //execute code
    }while (condition); */

    // // EXAMPLES

    var students = 0;

    do {
        console.log(`number of students we have: ${students}`);
        students++;
    } while (students <= 20);

    console.log("class is full.")
    console.log(lineBreak);


    var age = 0;

    do {
        console.log(`You turned ${age} today! happy birthday!`);
        age++;
    } while(age < 16);

    console.log(`You turned ${age} today! I got you a car!`);
    console.log(lineBreak);

    // //MINI EXERCISE

    // // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

    var cars = 0;

    do {
        var spotsAvai = 30 - cars;
        console.log(`number of spots we have left: ${spotsAvai}`);
        cars++;
    } while (cars <= 30);

    console.log("parking lot is full.")



})();