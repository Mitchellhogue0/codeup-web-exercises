
function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
    var textArea = document.getElementById("user-input")
    var newPost = document.createElement("textarea")
    newPost.innerText = textArea.value
    document.getElementById("blog-container").append(newPost);
}
addButtonEvent()