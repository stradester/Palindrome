
// variables
var resultsString = document.querySelector(".results");
var checkString = document.querySelector(".enter-text");
var checkButton = document.querySelector(".check");
var clearButton = document.querySelector(".clear");

// Listeners
checkButton.addEventListener("click", function () {
    buttonClick();
});

clearButton.addEventListener("click", function () {
    clearClick();
});

checkString.addEventListener("keydown", function () {
    resetResults();
});

function clearClick() {
    resetResults();
    checkString.value = "";
    checkString.focus();
}

function resetResults () {
    resultsString.style.color = "black";
    resultsString.innerHTML = "Results will display here.";
}

function buttonClick () {
    resetResults();
    var stringToCheck = document.querySelector(".enter-text").value;

    // Check for string entered in textbox
    if (emptyString(stringToCheck)) {
        return;
    }

    // convert to lowercase
    var stringToCheckLowerCase = stringToCheck.toLowerCase();

    // remove all but letters
    var stringOnlyLetters = convertToLettersOnly(stringToCheckLowerCase);

    // reverse string
    var stringReversed = reverseString(stringOnlyLetters);

    // compare strings
    if (stringOnlyLetters == stringReversed) {
        successfulResults();
    } else {
        notSoSuccessfulResults();
    }

}

function successfulResults () {
    resultsString.innerHTML = "🎉It's definitely a palindrome!🎉"
}

function notSoSuccessfulResults () {
    resultsString.innerHTML = "🙅‍♂️Nope.  Not a palindrome.🙅‍♀️"
}

function emptyString (es) {
    if (es == "") {
        resultsString.innerHTML = "Enter some text prior to checking ...";
        resultsString.style.color = "red";
    }
    return es == "";
}

function reverseString (pText) {
    var reverseArray = [];
    var rString = "";

    for (var i = 0; i < pText.length; i++) {
        reverseArray[(pText.length - 1)- i] = pText.substr(i, 1);
    }

    for (var i = 0; i < pText.length; i++) {
        rString += reverseArray[i];
    }
    return rString;
}

function convertToLettersOnly (rawString) {
    var rString = rawString.toLowerCase();
    // console.log(rString);
    var char = "";
    var newString = "";

    for (var i = 0; i < rString.length; i++) {
        char = rString.substr(i, 1);
        if (char >= "a" && char <="z" ) {
            newString += char;
        }
    }

    return newString;
}

function arrayToString (array) {
    var string = "";
    
    for (var i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

function stringToArray (string) {
    var array = [];

    for (var i = 0; i < string.length; i++) {
        array[i] = string.substr(i, 1);
    }

    return array;
}