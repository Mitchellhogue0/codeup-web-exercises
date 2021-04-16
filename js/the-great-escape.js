(function() {
    "use strict";

    function getkindOfDog() {
        return prompt("what kind of dog is it?")
    }

    function getContactInfo() {
        return prompt("How do I contact you when I find him/her")
    }

    function getDogName() {
        return prompt("What is your dog's name?")
    }

    function playTheGreatEscape() {
//get all info
        var contact = getContactInfo();
        var name = getDogName();
        var kind = getkindOfDog();
//searching
        alert("Time to search for dog")
        //see a dog!
        alert("I see a dog!");

        var dogSeen = getkindOfDog();
//check if dog matches
        var isSameKindOfDog = (dogSeen === kind) && confirm("Does the dog respond to the name: " + name);

        if (isSameKindOfDog) {
            //return dog to owner
            alert("*puts leash on " + name + "*");
            alert("time to call owner!");
            alert("calling: " + contact);
            alert("Returns dog! We did it!")
        }

    }

    playTheGreatEscape();

})();