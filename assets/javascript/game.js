

// looking at using THIS for repetitve lines


$(document).ready(function () {

    // variables
    var randomNumber;
    var randomValue;
    var randomValueArr = [];
    // var gemValue;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var musicToggle = true;
    var backgroundBeats;

    // generic function that, when given a minimum and maximum number, will give a random number between the ranges
    function randomNum(min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // random number generator function
    // picks random number from 39-131 and prints it to the random number section in the html
    function randomNumberPicker() {
        randomNumber = randomNum (19,120);
        $("#randomNumber").text(randomNumber);
    }

    // random crystal value generator for each immage
    // picks 4 random numbers from 1-12 and places them in an array, then assigns each to an image
    function randomValuePicker() {
        for (var i = 0; i < 4; i++) {
            randomValue = randomNum(1, 12);

            if (randomValueArr.indexOf(randomValue) === -1) {
                randomValueArr.push(randomValue);
            }
            else {
                while (randomValueArr.indexOf(randomValue) !== -1) {
                    randomValue = randomNum(1, 12);
                }
                randomValueArr.push(randomValue);
            }
            // else {randomValuePicker()}

            // if (randomValueArr.includes(randomValue)) {
            //     randomValue = randomNum(1, 12);
            //     randomValueArr.push(randomValue);
            // }
            // else {
            //     randomValueArr.push(randomValue);
            // }
        }
       
        $("#crystal1").attr("data-crystalvalue", randomValueArr[0]);
        $("#crystal2").attr("data-crystalvalue", randomValueArr[1]);
        $("#crystal3").attr("data-crystalvalue", randomValueArr[2]);
        $("#crystal4").attr("data-crystalvalue", randomValueArr[3]);       
    }

    // resets the user's score to 0 and emptys the random crystal values array
    // will also print the new userScore of 0 and the wins/losses
    function reset() {
        randomValueArr = [];
        userScore = 0;
        $("#userScore").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);   
        randomNumberPicker();
        randomValuePicker();
    }

    // starts the game when called
    function gameStart() {
     reset();
    // randomNumberPicker();
    // randomValuePicker();

        // thses lines are adding the data value of each gem to the userScore when clicked

        $(".image-sizer").on("click", function () {
           
            if (userScore < randomNumber) {
                var gemValue = $(this).attr("data-crystalvalue")
                gemValue = parseInt(gemValue, 10);
                userScore += gemValue;
                $("#userScore").text(userScore);

                if (userScore === randomNumber) {
                    reset();
                    wins++;

                    // gameStart();
                }
                else if (userScore > randomNumber) {
                    reset();
                    losses++;

                    // gameStart();
                }
            } 
        //    else if (userScore === randomNumber) {
        //         reset();
        //         wins++;

        //         // gameStart();
        //     }
        //     else if (userScore > randomNumber) {
        //         reset();
        //         losses++;

        //         // gameStart();
        //     }


            // if (userScore === randomNumber) {
            //     reset();
            //     wins++;
                
            //     // gameStart();
            // }
            // else if (userScore > randomNumber) {
            //     reset();
            //     losses++;
                
            //     // gameStart();
            // }
            // else if (userScore < randomNumber) {
            //     var gemValue = $(this).attr("data-crystalvalue")
            //     gemValue = parseInt(gemValue, 10);
            //     userScore += gemValue;
            //     $("#userScore").text(userScore);
            //     }          
        });
 
        console.log(randomNumber);
        console.log(randomValueArr);
        console.log(userScore);
    }
    gameStart();
});





// $("#crystal1").on("click", function () {

        //     var gemValue = $(this).attr("data-crystalvalue")
        //     gemValue = parseInt(gemValue, 10);
        //     userScore += gemValue;
        //     $("#userScore").text(userScore);
        //     if (userScore === randomNumber) {
        //         wins++;
        //         reset();
        //         gameStart(); //can you run a function within itself??
        //     }
        //     else if (userScore > randomNumber) {
        //         losses++;
        //         reset();
        //         gameStart(); //same guestion as above
        //     }
        // });
        // $("#crystal2").on("click", function () {
        //     var gemValue = ($(this).attr("data-crystalvalue"));
        //     gemValue = parseInt(gemValue, 10);
        //     userScore += gemValue;
        //     $("#userScore").text(userScore);
        //     if (userScore === randomNumber) {
        //         wins++;
        //         reset();
        //         gameStart(); //can you run a function within itself??
        //     }
        //     else if (userScore > randomNumber) {
        //         losses++;
        //         reset();
        //         gameStart(); //same guestion as above
        //     }
        // });
        // $("#crystal3").on("click", function () {
        //     var gemValue = ($(this).attr("data-crystalvalue"));
        //     gemValue = parseInt(gemValue, 10);
        //     userScore += gemValue;
        //     $("#userScore").text(userScore);
        //     if (userScore === randomNumber) {
        //         wins++;
        //         reset();
        //         gameStart(); //can you run a function within itself??
        //     }
        //     else if (userScore > randomNumber) {
        //         losses++;
        //         reset();
        //         gameStart(); //same guestion as above
        //     }
        // });
        // $("#crystal4").on("click", function () {
        //     var gemValue = ($(this).attr("data-crystalvalue"));
        //     gemValue = parseInt(gemValue, 10);
        //     userScore += gemValue;
        //     $("#userScore").text(userScore);
        //     if (userScore === randomNumber) {
        //         wins++;
        //         reset();
        //         gameStart(); //can you run a function within itself??
        //     }
        //     else if (userScore > randomNumber) {
        //         losses++;
        //         reset();
        //         gameStart(); //same guestion as above
        //     }
        // });
