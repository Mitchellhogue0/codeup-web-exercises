(function(){
    "use strict";
    var lineBreak = "-------------------------"
    // // what is an object?

    // var laptop ={
    //     color: 'space gray',
    //     make: 'mac',
    //     size: 13,
    //     turnsOn: function (){
    //         return 'turn the computer on';
    //     }
    //
    // }
    //
    // console.log(laptop)

    // // new object instance

    var loseSpurs = new Object("losSpurs")

    // console.log(loseSpurs)

    var aboutMe = new Object("I love video games and programming")





    // // oorrrr

    //Object literal
    // var theSpurs = {};

    var thisIsMe ={
        hobby: "video games",
        currentActivity: "programming class",
        favoriteFood: "Pizza"
    };


    // console.log(aboutMe2)


    // // what is a custom object?

    // // setting properties within object
    // // using dot notation

    // // syntax: nameOfObject.nameOfProperty--> this creates the property within the object
    // var theSpurs ={
    //     city: "San Antonio",
    //     coach: "gregg",
    //     wins: 5,
    //     isBestTeam: true
    // }

    // // adding properties to already created Objects


    var losSpurs = new Object();

    // console.log(losSpurs)

    // // nameOfObject.nameOfProperty = value
    losSpurs.coach = "Gregg";
    losSpurs.sport = "basketball";
    // console.log(losSpurs)

    // // bracket notation
    var daMavs = {};
    // console.log(daMavs)

    // // brackets and quotes
    // // nameOfObject[name of property]

    daMavs["city"] = "Dallas";
    // console.log(daMavs)


    var Federer = {
        name: "Roger",
        city: "Bern",
        "number of times hes won opens": 15 // // dont do this lol, its not good practice to use strings as property names, instead shorten it to something like "opensWon"
    }
    console.log(lineBreak)

    aboutMe.siblings = 2;
    aboutMe.makeOfVehicle = "Ford";
    // console.log(aboutMe)

    thisIsMe["siblings"] = 2;
    thisIsMe["makeOfVehicle"] = "Ford";
    // console.log(thisIsMe)

    //Laura's example

    let bracketObj = {
        cat: "meow", // // sees object name as string
        dog: "woof"
    }

    let dog = 'cat'; // // assigns dog to string 'cat', which will result in calling cat, aka meow

    let sound = bracketObj[dog];
    // console.log(sound);

    // // editing a property that already exists

    thisIsMe.siblings = 3;
    // console.log(thisIsMe.siblings)

    // // mini exercise

    // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation

    var TTRedRaiders ={
        city: "Lubbock",
        coach: "Matt Wells",
        sport: "Football"
    }

    TTRedRaiders.numOfPlayers = 151;
    TTRedRaiders.numOfChampsWon = 70;
    TTRedRaiders.isBestTeam = true;

    function showObj(obj){
        return [obj.sport, obj.numOfPlayers]
    }
    // console.log(showObj(TTRedRaiders))

    // // Nested values

    // var theSpurs = {
    //     city: "SA",
    //     coach: "gregg",
    //     wins: 5,
    //     players: ["player one", "two", "Tim duncan", "manu", "david robinson"],
    //     playerInfo: [
    //         {
    //             age: 40,
    //             first: "Tim",
    //             mvp: 4
    //         },
    //         {
    //             age: 43,
    //             first: "M",
    //             mvp: 5
    //         }
    //
    //     ],
    //     otherNBATeams: {
    //         jazz: {
    //             city: "salt lake",
    //             mascot: "jazz bear"
    //         }
    //     },   mavs: {
    //         city: "dallas",
    //         mascot: "champ"
    //
    //     },
    //     pistons: {
    //         city: "detroit",
    //         mascot: "hooper"
    //     }
    //
    //
    // }
    //



    // console.log(theSpurs)

    // // let's turn on the tv

    var laptop ={
        color: 'space gray',
        make: 'mac',
        size: 13,
        turnsOn: function (){
            return 'computer turning on... ON!';
        },
        whatSize: function (){
            return `A laptop is ${laptop.size} inches wide`
        }
    }


    // console.log(laptop.whatSize())




    var theSpurs = {
        city: "SA",
        coach: 'gregg',
        wins: 5,
        players: ["one", "two", "tim duncan", "manu", "david robinson"],
        playerInfo: [
            {
                name: "Tim",
                age: 40,
                mvp: 3
            },
            {
                name: "manu",
                age: 38,
                mvp: 6
            }
        ],
        otherNBATeams: {
            Jazz: {
                city: "Salt Lake City",
                mascot: "Jazz Bear",
                champsWon: 0
            },
            Mavs: {
                city: "Dallas",
                mascot: "MavsMan & Champ",
                champsWon: 1
            },
            Pistons: {
                city: "Detroit",
                mascot: "Hooper the Horse",
                champsWon: 3
            },
           BasketballTeam: {
               city: "smallTown",
               mascot: "probably an animal",
               champsWon: "0"
           }
        }
    }
    console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

    console.log(`mascot is ${theSpurs.otherNBATeams.Mavs.mascot}`)
    console.log(`changing Manus name: ${theSpurs.playerInfo[1].name = "Ginobli"}`);
    console.log(theSpurs.players[2])

    console.log(lineBreak)


    /** Mini Exercises */
    /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
          isOpen, ranking, yearOpened), as
          well as, information about at least 5 different animals (think nested objects). For each
          Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
           livingPlace). Each animal must also contain a method that returns the sound of that
            animal using the THIS keyword.
           hint: Each animal should have at least 5 properties (one of them being animalSound);
    */

    var zoo = {
        name: "Oberon Zoo",
        city: "San Antonio",
        isOpen: true,
        ranking: "No. 1",
        yearOpened: "2021",
        animals: {
            Lion: {
                hasFur: true,
                animalSound: "rawr XD",
                canFly: false,
                makeNoise: function () {
                    return `The lion says ${this.animalSound}`
                }
            },
            pterodactyl: {
                hasFur: false,
                animalSound: "EEEEEE",
                canFly: true,
                makeNoise: function () {
                    return `The pterodactyl says ${this.animalSound}`
                },
                polarBear: {
                    hasFur: true,
                    animalSound: "Catch!",
                    canFly: false,
                    makeNoise: function () {
                        return `The Polar Bear says ${this.animalSound}`
                    }


                }
            }
        }
    }

    console.log(zoo.animals.Lion.makeNoise())
    console.log(zoo.animals.pterodactyl.makeNoise())
    console.log(zoo.animals.polarBear.makeNoise())





})();