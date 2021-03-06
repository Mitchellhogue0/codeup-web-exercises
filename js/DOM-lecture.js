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

for(var i = 0; i < yellowDiv.length; i++){
    yellowDiv[i].style.border = '4px solid #f8f8f8';
    yellowDiv[i].style.color = "blue";
}

// // change inner contents
let yellowPar = document.getElementById('change-txt');
console.log(yellowPar.innerText);

//creating an element

// 1.create an element
let newEl = document.createElement("p");

//2. change its innerHTML
newEl.innerText = "Hello this is my new paragraph"

// inner HTML
let pizzaForm = document.getElementsByClassName("pizza")
pizzaForm[0].innerHTML = " ";

console.log(lineBreak)
// // MINI EXERCISE // //
let newEl2 = document.createElement("ul");
let newEl3 = document.createElement("li")
let newEl4 = document.createElement("li")
let newEl5 = document.createElement("li")
newEl2.appendChild(newEl3);
newEl2.appendChild(newEl4);
newEl2.appendChild(newEl5);
newEl3.innerHTML = ("one")
newEl4.innerHTML = ("two")
newEl5.innerHTML = ("three")
console.log(newEl2)
let body = document.querySelector('body');
body.appendChild(newEl2);
newEl4.setAttribute('id', 'two')

// // EXERCISE END // //
console.log(lineBreak)


//3.append it as a child to a parent element
pizzaForm[0].appendChild(newEl);
console.log(newEl)


// query selector --> node, returns first thing you're looking for (searches from top to bottom
//querySelectorAll --> you dont have to
// getElementsByClassName --> HTMLCollection

// // REMOVING CHILDREN 
// 1. select our element
let twoLi = document.querySelector('#two') //li with id of two
console.log(twoLi);
newEl2.removeChild(twoLi);


console.log(lineBreak)
// // MINI EXERCISE 2 // //
// TODO: change the text inside of 1 of the paragraphs to be a short paragraph about you
// TODO: log the second paragraph element from the list of all
//  paragraphs
// TODO: create a new ul element and 5 new li elements. Each of your li's should have some text inside of it
// TODO: replace the last div's paragraph with your new ul. make sure the ul has all 5 li's inside of it
// TODO: remove the last li

var firstP = document.getElementById('firstP')
firstP.innerText = "This paragraph is now about me, I enjoy this way more than I do CSS :)"
let p = document.getElementsByTagName("p")
console.log(p[1]);
newUl = document.createElement("ul")
newUl.innerHTML = "<li>one</li><li>two</li><li>three</li><li>four</li><li>five</li>"
firstP.appendChild(newUl)

// // EXERCISE END // //
console.log(lineBreak)








