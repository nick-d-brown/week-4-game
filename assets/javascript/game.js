
$(document).ready(function(){

// variables

var randomNumber;
var randomValue;
var randomValueArr = [];
// var gemValue;
var userScore = 0;

// random number generator function
// picks random number from 39-131 and prints it to the random number section in the html
function randomNumberPicker() {
    randomNumber = Math.floor(Math.random() * (131 - 39 + 1) + 39);
    $("#randomNumber").text(randomNumber);
}

// random crystal value generator for each immage
function randomValuePicker() {
    for (var i = 0; i < 4; i++) {
        randomValue = Math.floor(Math.random() * (21 - 1 + 1) + 1);
        randomValueArr.push(randomValue);
    }
    // for (var i = 0; i < 4; i++) {
    //     $(".imagesizer").attr("data-crystalvalue", randomValueArr[i]);
    // }

    $("#crystal1").attr("data-crystalvalue", randomValueArr[0]);
    $("#crystal2").attr("data-crystalvalue", randomValueArr[1]);
    $("#crystal3").attr("data-crystalvalue", randomValueArr[2]);
    $("#crystal4").attr("data-crystalvalue", randomValueArr[3]);
}

// $(".image-sizer").on("click", function(){
    randomNumberPicker();
    randomValuePicker();

    $("#crystal1").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
    });
    $("#crystal2").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
    });
    $("#crystal3").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
    });
    $("#crystal4").on("click",function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue, 10);
        userScore += gemValue;
    });

    $("#userScore").text(userScore);
    
    console.log(randomNumber);  
    console.log(randomValueArr);
    console.log(userScore);

});