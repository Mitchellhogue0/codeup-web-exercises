// js promises

// What is a promise in JS

// what is async vs sync
// async - everything happens at once
// sync - happens sequentially

// three states of a promise
//pending
//resolved (successful)
//rejected (handle failed request)


// Fetch

//basic fetch syntax
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())       //what is happening is the request is promised, but only when it gets a response, "THEN" run the below code
//     .then(data => {                          // "response.json()" in the first .then() is the "data" in the second .then()
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//         alert("Sorry there was an error, go away :)")
//     });


// .then(response => console.log(response))
// // ^ is the same as
// .then(function (response){
//     console.log(response);
// })


//fetch syntax with .catch() method
//     .catch(err => console.log(err));

// lets break down what .catch() method does

// catch takes in an error as a parameter and you can do whatever with it


//fetch syntax with post request

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers: {},
//     body: {title: "cupcakes yum!", body: "cupcakes are delicious sometimes as long as they dont have chocolate in them"}
// })
//     .then(response => console.log(response))
//     .catch(err => {
//         console.log(err)
//         alert("Sorry there was an error, go away :)")
//     });

// if we wanted to see what we posted, we would have to make another GET request to be able to see it


// >>>>>>>>>>>>>>>>>>>> Mini Exercise <<<<<<<<<<<<<<<<<<<<<<<<

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())       //when you have the curly brace{} it requires you to return the response.json(), without (how it is now), you dont have to return
    .then(data => {
        // console.log(data);
        // console.log(data.message);
        $("#random-dog-image").attr('src', data.message)
    })
    .catch(err => {
        console.log(err)
        alert("Sorry there was an error, go away :)")
    });


// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data => {
        console.log(data); //
        console.log(data[10].id);
        return data[10].id;
    })
    .then(dataId => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(comment => {
                    console.log(comment)
                    $("#blog").append(`<h4>${comment.name}</h4><hr><p>${comment.body}</p>`)
                })
            })
    })
    .catch(error => {
        console.log(error)
});
