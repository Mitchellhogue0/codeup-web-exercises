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

    console.log("parking lot is full.");

    console.log(lineBreak)

    // // FOR LOOPS
    // // SYNTAX:
    // // for: js word that says " im about to start a loop, please treat as such"
    // // (starting point; stopping point; how to iterate;)
    // // {code to be executed AT EACH ITERATION}

    for(var i = 0; i <= 10; i++){
        console.log(`hello world ${i}`) //log starts at 0, will log 11 times
    }
    console.log(lineBreak);
    // // EXAMPLE:
    // // how many egg cartons can you fill? start at 0 eggs and iterate by 1

    // for (i = 0; i <= 72; i++){
    //    var cartons = (i / 12)
    //     console.log(`${i} egg(s)`)
    // }
    // console.log(`We filled ${cartons} egg cartons`);

    // // BREAK AND CONTINUE
    // // break: helps avoid infinite loops
    // // break: leaves the switch statement if it meets a certain condition

    var dozens = 0;
    for(let i = 0; i <=36; i++){
        if(i % 12 === 0){
            console.log(`starting with: ${dozens} dozen eggs`)
            dozens++;
            console.log(dozens)
            break; // exits out of loop
            console.log(`we now have ${dozens} dozen eggs`)
        }
    }

    for(let i = 0; i <=10; i++){
        console.log(`first: ${i}`);
        continue;       // // breaks out of current loop and restarts the loop; will not reach code below
        i *= 2;
        console.log(`second ${i}`);
    }
    console.log(lineBreak)
    // // EXTRA: NESTED FOR LOOPS
    // // Write a (nested) for loop that counts from 1 to 5 and then from 5 to 1

        for(let i = 1; i <= 5; i++){
            console.log(`first: ${i}`)
            if(i === 5){
            for(let i2 = 5; i2 > 0; i2--){
                console.log(`second: ${i2}`)
            }
        }

    }
    console.log(lineBreak)


    // // WRAP INNER LOOP WITHIN A FUNCTION
    function innerLoop (){
        for(let i2 = 5; i2 > 0; i2--){
            console.log(`second: ${i2}`)
        }
    }

    for(let i = 1; i <= 5; i++) {
        console.log(`first: ${i}`)
        if (i === 5) {
            innerLoop();
        }

    }

    console.log(lineBreak)

    // TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)

    for(i = 0; i <=30; i++){
        if(i % 2 === 0){
            console.log(`${i} + 2 is ${plusTwo(i)}`);
        }else{
            console.log(`${i} is odd`)
        }
    }

    function plusTwo(input){
        return input + 2;
    }

    console.log(lineBreak);


    // // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.

    for(i =1; i <= 40; i++) {
        if (i % 3 === 0) {
            console.log(`${i} is divisible by 3: Marco!`)
        }

        if (i % 5 === 0) {
            console.log(`${i} is divisible by 5: Polo!`)
        }
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(`${i} is divisible by 3 and 5, Marco Polo!!`)
        }
        if (i % 5 !== 0 || i % 3 !== 0) {
            console.log(`${i} is not divisible by 3 or 5, I'm not playing :(`)
        }

    }





})();