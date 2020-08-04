// Calculator Button work
$(document).ready(function () {

    // VARIABLES
    var calc = $('.container');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 3));
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
    });

});


/// GeneratePin & inputPin work from submit

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function myFunction() {

    let generatePin = document.getElementById("displayOne").value;

    let inputPin = document.getElementById("displayTwo").value;

    //create for loop to choose password characters
    if (generatePin == inputPin) {
        document.getElementById("match").style.display = "block";
        document.getElementById("unmatch").style.display = "none";

    } else {
        document.getElementById("unmatch").style.display = "block";
        document.getElementById("match").style.display = "none";

    }
});


// Generate pin & Random number output work done
const generateNumber = document.getElementById("generate");
generateNumber.addEventListener("click", function () {
    let randomNumber = "";

    //create for loop to choose password characters
    for (var i = 0; i <= length; i++) {
        randomNumber = Math.floor(1000 + Math.random() * 9000);
    }
    //add password to textbox/display area
    document.getElementById("displayOne").value = randomNumber;
})

// hide input with added placeholder done
const hideBtn = document.querySelector(".submit-btn");
hideBtn.addEventListener("click", function () {
    document.getElementById("displayOne").value = "";
    document.getElementById("displayTwo").value = "";
});























