(function (){
    "use strict";

    /* ########################################################################## */
    var lineBreak = "-----------------------";
    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(color) {
        if (color === "blue") {
            return "Blue is the color of the Zora tunic";
        }
        if (color === "red") {
            return "Red is the color of the Goron tunic";
        }
        if(color === "cyan") {
            return "cyan is the color of the Ocarina of Time";
        }
        return color + " not found";
    }

    console.log(analyzeColor("red"));

    console.log(lineBreak);
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(analyzeColor(randomColor))
    console.log(lineBreak);

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function colorSwitch (color) {

        switch (color) {

            case "blue":
                console.log("Blue is the color of the Zora tunic");
                break;
            case "red":
                console.log("Red is the color of the Goron tunic");
                break;
            case "cyan":
                console.log("cyan is the color of the Ocarina of Time");
                break;
            default:
                console.log(color + " not found");
        }

    }
    console.log(colorSwitch("red"));
    console.log(lineBreak);


        /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

        function selectColor() {
          return prompt("please type a color")
        }
    var color = selectColor();
        alert(analyzeColor(color));
    console.log(analyzeColor(color));
    console.log(lineBreak);
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(total,discount) {
        console.log(total,discount)
        if (discount === "1") {
            return total - (.1 * total);
        }
        if (discount === "2") {
            return total - (.25 * total);
        }
        if (discount === "3") {
            return total - (.35 * total);
        }
        if (discount === "4") {
            return total - (.5 * total);
        }
        if (discount === "5") {
            return total - (1 * total);
        }
    }
        console.log(calculateTotal(20, "4"));
        console.log(lineBreak);

        /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function getBill(){
    return prompt("What was your total bill?");
}
    var bill = getBill();

    alert("Your lucky number was " + luckyNumber + "!")

    console.log(calculateTotal(bill, luckyNumber.toString()))
    var discount = calculateTotal(bill,luckyNumber.toString())
    confirm("That brings your price down to: " + discount)

    console.log(lineBreak);



    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


    confirm("Would you like to enter a number?")

    function analyzeUserInput(number) {
        if (isNaN(number)) {
            return alert("This is not a number")
        } else {
            evenOrOdd(chosenNumber);
            plus100(chosenNumber);
            posOrNeg(chosenNumber);
        }
    }

    function number1() {
        return prompt("Please enter your number:")
    }

    var chosenNumber = number1();
    console.log(chosenNumber)
    analyzeUserInput(chosenNumber);

    function evenOrOdd(number) {
        if (number % 2 === 0) {
            return alert("Your number is even!");
        } else {
            return alert("Your number is odd!")
        }
    }
    function plus100(number){
        alert(parseInt(number)+100)
    }
    function posOrNeg(number) {
        if (parseInt(number) > 0) {
            return alert("Your number is Positive!")
        } else {
            return alert("Your number is negative!")
        }

    }







})();