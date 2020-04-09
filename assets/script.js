// the logic for the character generator 

// id = charRange
// id = lowerSelect
// id = upperSelect
// id = numberSelect
// id = specialSelect
// id = generate
// id = result

// dom elements from html page
var passLength = document.getElementById('charRange');
var getLower = document.getElementById('lowerSelect');
var getUpper = document.getElementById('upperSelect');
var getNumber = document.getElementById('numberSelect');
var getSpecial = document.getElementById('specialSelect');
var passGenerate = document.getElementById('generate');
//first, lets create the fuctions, 1 function for each type of character

// first fuction for lower case letters
function randomLower() {
    // for each function, we create a string which can be accessed like an array
    const lowerList = "abcdefghijklmnopqrstuvwxyz"
    // we will access the "array" by using lowerList[] with a random character equation in the brackets
    var lowerSelect = lowerList[Math.floor(Math.random() * lowerList.length)];
    // appends the letter taken from the array
    password = password.concat(lowerSelect);
    
}

function randomUpper() {
    const upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperSelect = upperList[Math.floor(Math.random() * upperList.length)];
    password = password.concat(upperSelect);
}

// the number generator
function randomNumber() {
    const numberList = '0123456789';
    var numberSelect = numberList[Math.floor(Math.random() * numberList.length)];
    password = password.concat(numberSelect);
}

// the symbol generator
function randomSpecial() {
    const specialList = '!@#$%^&*()<>?';
    var specialSelect = specialList[Math.floor(Math.random() * specialList.length)];
    password = password.concat(specialSelect);
}
// create variable of empty string
var password = " "
// passGenerate = html id generate (buttong) and will call function on click
passGenerate.addEventListener('click', function() {
    // first we have to make sure the variable "password" is reset every click
    password = password.slice(0,1)

    // now we set boolean values to the check boxes
    var lowerChecked = getLower.checked;
    var upperChecked = getUpper.checked;
    var numberChecked = getNumber.checked;
    var specialChecked = getSpecial.checked;

    // now a variable to get the value of the html charRange box
    var getLength = passLength.value;

// now a for loop to iterate the amount of times we need to get the password length desired
// functions are called in the loop, the fuctions were written above and they do all the work
// this loop filters out the unchecked boxes
// this will loop more times than need, however there is a conditional that will filter out the un-needed values
    for (let i = 0; i < getLength; i++) {
        if (lowerChecked) {
            randomLower()
        }
        if (upperChecked) {
            randomUpper()
        }
        if (numberChecked) {
            randomNumber()
        }
        if (specialChecked) {
            randomSpecial()
        }
        // now if else statements to return our password value when we reach the desired outcome. 
        if (password.length === getLength) { 
            console.log(password)
            document.getElementById('result').innerText = password
            return password
        }
        // this else if will filter out the additional values we do not need
        else if (password.length > getLength) {
            password = password.slice(0, getLength)
            console.log(password)
            document.getElementById('result').innerText = password
            return password
        }
    }
})

