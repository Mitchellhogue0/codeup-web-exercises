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
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))

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

$.ajax("https://jsonplaceholder.typicode.com/comments")

// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully

$.ajax("https://jsonplaceholder.typicode.com/posts", {
    type: "POST",
    data: {
        "userId": 11,
        "id": 101,
        "title": "GG",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    }
});

$("#get-it").click(function () {
    console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
        type: "POST",
        data: {
            "userId": 11,
            "id": 101,
            "title": "GG",
            "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
    }));
})

//responses

//successful                                                                data always first parameter, then status, then
$.ajax("https://jsonplaceholder.typicode.com/comments").done(function (data, status, jqXhr) {
    // console.log(status);
    // console.log(data);
    // console.log(jqXhr);
    // alert("your request has been completed successfully")
})

//failed
//failed() --> method tht will trigger a function to be executed if the ajax request has failed
// im triggering this err with a typo in the endpoint
// $.ajax("https://jsonplaceholder.typicode.com/commnts", {
//     type: "POST",
//     data: {
//         title: "hello world",
//         body: "our planet rocks!"
//     }
// }).fail(function (jqHxr, status, error) {
//     // console.log(jqHxr);
//     // console.log(status); // 300 or 400 .// failed // statusText
//     // console.log(error); // dont really need to log, simply alert
//     alert("sorry something went wrong :(")
// })


//always

// $.ajax("https://jsonplaceholder.typicode.com/commnts").always(function () {
//     alert("Thank you for being here today!")
// })

// using error / success as properties
$.ajax("https://jsonplaceholder.typicode.com/comments", {
    type: "GET",
    success: function (){
        alert("this worked")
    },
    error: function (){
        alert("an err has occured")
    }
})

$.ajax("https://jsonplaceholder.typicode.com/comments").done(function (data){
    console.log(data);
    let allPosts = data;
    console.log(allPosts)
    let dataID = allPosts[10].id
    console.log(dataID);
    // make a request to the comments section and look for onlh the comments that have an ID of the one you just got
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${dataID}`).done(function (commentsData){
        console.log(commentsData)
    })
}).fail(function (){
    alert("something went wrong")
})