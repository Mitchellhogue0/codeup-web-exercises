(function () {
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';

    function addClickEvents(elementsToBind, color1, color2) {
        let handlerBlueBckGnd = function () {
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }

    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    // document.addEventListener("DOMContentLoaded", function () {
    //     // addListeners();
    // });

    //parent method for adding all listeners
    // function addListeners() {
    //     //get the elements to add listener and change image
    //     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    //     addEvents(cardContainers, './img/jazz-music-rubber-duck.jpg', 'mouseover');
    //     addEvents(cardContainers, './img/jazz-music-rubber-duck.jpg', 'mouseout');
    // }
    //
    // //add mouseover/mouseout events to all selected elements
    // function addEvents(cardContainers, imgPath, listenerType) {
    //     cardContainers.forEach((cc) => {
    //         let card = cc;
    //         //create listener which will call function change the image
    //         let listener = function (event) {
    //             let cardImg = card.querySelector(".card .card-img-top");
    //             changeImage(cardImg, imgPath);
    //         };
    //         cc.addEventListener(listenerType, listener);
    //     });
    // }
    //
    // //actual function to swap images
    // function changeImage(card, imgPath) {
    //     card.setAttribute('src', imgPath);
    // }
    let card = $(".col-md-3")

    function isHovered() {
        $(".card-img-top", this).attr({
            src: 'img/ole-rick.gif'
        })
    }

    function notHovered() {
        $(".card-img-top", this).attr({
            src: "img/question.png"
        })
    }

    function beginHover() {
        card.hover(isHovered, notHovered)
    }


beginHover();




   // TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'

    $('#submitBtn').click(function() {
        $("#override-bootstrap").css("background-color", "#F00");
    });


  //  TODO: When the user clicks a .card-text element, change its background color to 'red'

    $('.card-text').click(function() {
        $(this).css("background-color", "#F00");
    });


//     TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
// -> When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)

    $('#resetBtn').click(function() {
        location.reload();
    });


    // TODO: When the user clicks the element with the id #main-title, its text font size doubles

    $('#main-title').click(function() {
        $(this).css({
            fontSize: "5em"
        })
    });


    // TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

    // let hoverIn = function (){
    //    $(this)
    //        .find(('.card-title')
    //        .text($(this)
    //            .attr("data-attribute"))
    // )}
    //
    // let hoverOut = function () {
    //
    // }
    //
    // $('.col-md-3').hover(
    //     hoverIn, hoverOut
    // )


    // TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

    $(".list-group-item").click(function (){
        $(this).css({
            "text-transform": "uppercase",
            backgroundColor : "lightgray"
        });
    });



})();