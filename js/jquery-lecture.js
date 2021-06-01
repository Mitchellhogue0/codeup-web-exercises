// dollar sign tapping into jquery library
$("selector")
// "selector" is any element in the dom you want to access. ie id,class,element, etc.

// example object
let school = {
    name: "Lubbock High",
    location: "Lubbock",
    Seniors: 523
}

// using jquery to select by tag
$("h1")
// using jquery to select by id
$("#paragraph")
// using jquery to select by class
$(".paragraphs")

// // JQUERY THINGS
// example: hide
// $("h2").hide()

// // MINI EXERCISE
$("#all-caps").hide();
$("span").hide();
$(".show-me").show();
// // EXERCISE END

// // SELECTING CHILDREN ELEMENTS AND CSS
$("ul").children().css("color", "blue");

// // ADDING CLASSES
$("h2").addClass("border");
// $("h2").removeClass()

$(".pink").css("background-color", "pink");
$(".orange").css("background-color", "orange");
$("document").ready(function () {
    return $(".orange").hide()
});


