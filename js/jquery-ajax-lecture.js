// JSON
// what is it?
//javascript object notation -- data is stored and formatted that's easy for us humans to read
// JSON structure -
// javascript object -
// let animal = {
//  name: froggy
//  species: frog
//  occupation: frogger

// JSON object-
// response === {
//  "name": "froggy"
//  "species": "frog"
//  "occupation": "frogger"


// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values

//   {
//     "dubs": 25,
//     "favGun": "Amax",
//     "classBuild": ["Amax", "MP5", "heartbeat", "Semtex"],
//     "ghostNeeded": true,
//      "usefulRandos": null
// }

//requests
// jquery .ajax() method
//syntax
// GET request - getting info from somewhere
console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))

$.ajax("https://jsonplaceholder.typicode.com/comments", {
    type: "POST",
    data: {
        title: "My trip to antartica",
        article: "lorem ipsum blaahhh antartica dope"
    }
})
// url- location to look for something / to go post something

// POST request - adding/sending info to the server adding to it

// DELETE - send info about the thing you want to delete and then go in and actually delete

// PUT -


// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.

console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))

// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully

console.log($.ajax("https://jsonplaceholder.typicode.com/posts"))