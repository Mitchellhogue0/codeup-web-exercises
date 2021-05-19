var lineBreak = '--------------';

// DOM
let school = {
    teacher: "casey",
    students: 38,
    //object can also hold function
    //methods
    getNumStudents: function (){
        console.log(`num of students is : ${this.students}`);
    }
}

//print teachers name
console.log(school.teacher);
console.log(school.students);
console.log(school.getNumStudents());

// retrieving elements

//by ID
let redElement = document.getElementById("red");
console.log(redElement);

// whats returned?
//the entire element --> node element

//by className

let green = document.getElementsByClassName("green");
console.log(green);
console.log(green[0]);

//whats returned?
//HTML collection--> array of all the elements with that class name
//(even if theres only one element with that class name)
//use loop to access items inside of array *****

//get by tag name
let par = document.getElementsByTagName('p');
console.log(par);

console.log(lineBreak);
// MINI EXERCISE /////
// // TODO: build a simple 2 x 3 grid using bootstrap and give each
//  item a unique border color. Give any three of those of those divs a
//  blue background-color. Place a paragraph tag inside of all 6 divs
//  (use lorem). Four of the six paragraphs should have dark-green font
//  color
// TODO: print the following items to the console: 1) A node that
//  represents a div/item with a red border. 2) an array of elements
//  whose text is dark-green. 3) an array of all paragraph elements

let redBorder = document.getElementById('border-red')
console.log(redBorder);
let greenText = document.getElementsByClassName('green-text');
console.log(greenText);
let paragraphs = document.getElementsByTagName('p')
console.log(paragraphs);
// MINI EXERCISE END /////
console.log(lineBreak);
// ADDING ELEMENTS

// REMOVE ATTRIBUTES
let firstBlue = document.getElementsByClassName('blue-background')[0];
console.log(firstBlue);

firstBlue.removeAttribute('class');
firstBlue.setAttribute('class', 'col-3')


// STYLING ELEMENTS

let yellowDiv = document.getElementsByClassName('border-yellow');
console.log(yellowDiv);

yellowDiv.style.border = '4px solid #f8f8f8';
// yellowDiv.style.color = "blue";

// // change inner contents
let yellowPar = document.getElementById('change-txt');
console.log(yellowPar.innerText);