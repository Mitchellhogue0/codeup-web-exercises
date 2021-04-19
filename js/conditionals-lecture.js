(function(){
    "use strict";

// var hasCar = true;
//     if (hasCar) {
//         console.log("lets get in and go!")
//     } else {
//         console.log("lets go get a car!")
//     }
//
//  function canWeDrive (age, isLicensed, isInsured, canGetUber) {
//      var isLicensed = age >= 16;
//      var isLegalDriver = isLicensed && isInsured;
//      if (isLegalDriver && hasCar) {
//          console.log("lets get in and go!")
//      } else if ((!isLegalDriver || !hasCar) && canGetUber) {
//          console.log("Call an uber")
//      } else {
//          console.log("call your friend to give us a ride")
//      }
//
//  }
//     canWeDrive(21,true,false,false)

    // TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
//  -> Let's augment our getToDestination() function
//  -> Create a function called canGetRideshare() which will *RETURN* a boolean
//      -> It will determine if there are drivers nearby and the person has enough money for the ride
//  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
//  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
//  -> Be sure to log to the user if they can or cannot get a rideshare
// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
//  -> Consider this: What if mileage determined:
//      -> If the rider has enough funds?
//      -> If there is a driver close enough to service the rider?

    // function getToDestination(age, isInsured, hasCar, canGetRideshare){
    //     var isLicensed = age >= 16;
    //     var isLegalDriver = isLicensed && isInsured;
    //     if (isLegalDriver && hasCar){
    //         console.log("Let's get in and go!");
    //     } else if(!isLegalDriver && canGetRideshare){
    //         console.log("Let's call a rideshare!");
    //     } else{
    //         console.log("I think my friend can give us a lift!");
    //     }
    // }
    // function canGetRideshare(cash,nearByDrivers) {
    //     var enoughMoney = cash >= 10;
    //     if (enoughMoney && nearByDrivers) {
    //         return true;
    //     } else {
    //     }
    // }
    //     console.log(getToDestination(21,false,true,canGetRideshare(10,true)))
    //
    // function driverNear () {
    //
    // }
    //TERNARY-------------------------------------------

    // function showFatType () {
    //     var fatType = "butter";
    //
    //     var isButter = fatType.toLowerCase() === "butter";
    //
    //     return isButter
    //     ? "mo butta more betta"
    //     : "I cant believe its not butter"
    //
    // }
    //
    // console.log(showFatType());

    //SWITCH STATEMENTS----------------------------------

    // function getHeartRateRange(){
    //     var age = 54;
    //     var heartRange;
    //     switch (true){
    //         case (age >= 20 && age < 30):
    //             heartRange = "100-170";
    //             break;
    //         case (age >= 30 && age < 35):
    //             heartRange = "95-162";
    //             break;
    //         case age >= (35 && age < 40):
    //             heartRange = "93-157";
    //             break;
    //         case age >= (40 && age < 45):
    //             heartRange = "90-153";
    //             break;
    //         case age >= (45 && age < 50):
    //             heartRange = "88-149";
    //             break;
    //         case age >= (50 && age < 55):
    //             heartRange = "83-140";
    //             break;
    //         case age >= (55 && age < 60):
    //             heartRange = "80-136";
    //             break;
    //         case age >= (60 && age < 65):
    //             heartRange = "78-132";
    //             break;
    //         case age >= (65 && age < 70):
    //             heartRange = "75-128";
    //             break;
    //         default:
    //             heartRange = "Age outside of range. Cannot determine ideal heart rate";
    //             break;
    //     }
    //     return heartRange;
    // }
    // function showHeartRateRange(heartRange){
    //     console.log("Your ideal heart rate range (in bpm) is: " + heartRange);
    // }
    // showHeartRateRange(getHeartRateRange());

function isCorrectFruit (fruit) {

    switch (fruit) { //string

        case "apple"://string
            console.log("this is an apple");
            break;
        case "orange":
            console.log("this is an orange");
        case "banana":
            console.log("this is a banana");
            break;
        default:
            console.log("probably not a fruit")
    }
}
    isCorrectFruit("potato")




 })();