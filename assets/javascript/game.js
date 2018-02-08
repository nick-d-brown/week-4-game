
$(document).ready(function(){

// variables

var randomNumber;
var randomValue;
var randomValueArr = [];
// var gemValue;
var userScore = 0;
var wins = 0;
var losses = 0;

// random number generator function
// picks random number from 39-131 and prints it to the random number section in the html
function randomNumberPicker() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#randomNumber").text(randomNumber);
}

// random crystal value generator for each immage
function randomValuePicker() {
    for (var i = 0; i < 4; i++) {
        randomValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        randomValueArr.push(randomValue);
    }
    // for (var i = 0; i < 4; i++) {
    //     $(".imagesizer").attr("data-crystalvalue", randomValueArr[i]);
    // }

    $("#crystal1").attr("data-crystalvalue", randomValueArr[0]);
    $("#crystal2").attr("data-crystalvalue", randomValueArr[1]);
    $("#crystal3").attr("data-crystalvalue", randomValueArr[2]);
    $("#crystal4").attr("data-crystalvalue", randomValueArr[3]);

    $("#wins").text(wins);
    $("#losses").text(losses);
}

function reset() {
    randomValueArr = [];
    userScore = 0;
}

// $(".image-sizer").on("click", function(){
 function gameStart() {
    randomNumberPicker();
    randomValuePicker();

   
    // thses lines are adding the data value of each gem to the userScore when clicked
    // I have also tried adding , randomValueArr[0] or 1, 2, 3 at the end of the .attr in gem value

    $("#crystal1").on("click",function () {

        var gemValue = $(this).attr("data-crystalvalue")
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
        $("#userScore").text(userScore);
         if (userScore === randomNumber) {
        wins++;
        reset();
        gameStart(); //can you run a function within itself??
    }
        else if (userScore > randomNumber) {
        losses++;
        reset();
        gameStart(); //same guestion as above
    }
    });
    $("#crystal2").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
        $("#userScore").text(userScore);
         if (userScore === randomNumber) {
        wins++;
        reset();
        gameStart(); //can you run a function within itself??
    }
         else if (userScore > randomNumber) {
        losses++;
        reset();
        gameStart(); //same guestion as above
    }
    });
    $("#crystal3").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
        $("#userScore").text(userScore);
         if (userScore === randomNumber) {
        wins++;
        reset();
        gameStart(); //can you run a function within itself??
    }
        else if (userScore > randomNumber) {
        losses++;
        reset();
        gameStart(); //same guestion as above
    }
    });
    $("#crystal4").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
        $("#userScore").text(userScore);
         if (userScore === randomNumber) {
        wins++;
        reset();
        gameStart(); //can you run a function within itself??
    }
        else if (userScore > randomNumber) {
        losses++;
        reset();
        gameStart(); //same guestion as above
    }
    });

    
    
    
   


    console.log(randomNumber);  
    console.log(randomValueArr);
    console.log(userScore);
 }

gameStart();

});