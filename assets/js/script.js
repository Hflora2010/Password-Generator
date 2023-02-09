// Assignment code here

//Declaring password criteria variables 
var upperAlph; //uppercase letters
var lowerAlph; //lowercase letter
var specChar; //special characters
var number; //number

//assigning the password criteria variables to values
//question: is this correct to be writing these in arrays?
//question: special characters can only be an array, correct?
var upperAlph= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlph= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// change to strings with commas
var specChar= [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var number= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var options = getOptions()
  var userArray = []

  // continue do build this out
  if (options.numeric) {
    userArray.push(number)
  } else if (options.lower) {
    userArray.push(lowerAlph)
  } else if (options.upper) {
    userArray.push(upperAlph)
  } else if (options.special)
    userArray.push(specChar)

  var passwd = ""

  for(var i=0; i<options.length; i++) {
    // this line is choosing a random array from our user array
    var randIndex = Math.floor(Math.random() * userArray.length)
    var workingArray = userArray[randIndex]
    var workingIndex = Math.floor(Math.random() * workingArray.length)
    password += workingArray[workingIndex]
  }

  return passwd
  
}

function getOptions() { 
  var length=prompt("Please provide length of your desired password. Note, length should be between 8-128 characters.", "8")
  // if length isn't numeric alert the user that we need a number return null (typeof)
  // if length is less than 8 return null
  // if length is greater than 128 return null
  if (length < 8) {
    alert("Password length needs to be between 8 and 128 characters.")
    return null
  }

  var numeric=confirm("Would you like to include numbers in your password?")
  console.log(numeric); 
  //write 3 more confirm for other var to meet criteria

  // if no options are chosen (all = false) alert 'need at least one type of char' return null
  // return an array of all the options
  return {
    length,
    numeric, 
    special, 
    uppper, 
    lower
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
