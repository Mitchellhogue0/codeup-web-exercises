$(document).ready(function () {
    alert('The DOM has finished loading!');
});

$("#header").css("color", "darkblue")
console.log($("#header")[0])
alert($("#header")[0].innerText);
$(".first").css("font-size", "30px")
$("#list").css("color", "darkgreen")
$(".codeup").css("border", "1px solid red")
$("li").css("font-size", "20px")
$(".craft").css({
    "background-color": "#fff2ac",
    "background-image": "linear-gradient(to right, #ffe359 0%, #fff2ac 100%)"
});
alert($("h1")[0].innerText)
$(".funk").css('font-variant-numeric', 'ordinal')