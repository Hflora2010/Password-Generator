// Assignment code here

//Declaring password criteria variables 
var upperAlph; //uppercase letters
var lowerAlph; //lowercase letter
var specChar; //special characters
var number; //number

//assigning the password criteria variables to values
//question: is this correct to be writing these in arrays?
//question: special characters can only be an array, correct?
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// change to strings with commas
var specChar = "!,#,$,%,&,(,),*,+,-,.,/,:,;,<,=,>,?,@,[,],^,_,{,|,},~,".split(",")
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function random(arr) {
  return arr[Math.floor(Math.random()* arr.length) ]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var options = getOptions()
  var userArray = []

  var passwd = ""


  // continue do build this out
  if (options.numeric) {
    userArray.push(...number)
    passwd += random(number)
  } 
  if (options.lower) {
    userArray.push(...lowerAlph)
    passwd += random(lowerAlph)
  } 
  if (options.upper) {
    userArray.push(...upperAlph)
    passwd += random(upperAlph)
  } 
  if (options.special) {
    userArray.push(...specChar)
    passwd += random(specChar)
  } 

  for (var i = passwd.length; i < options.length; i++) {
    // this line is choosing a random array from our user array
    passwd += random(userArray)
  }

  return passwd

}

function getOptions() {
  var length = parseInt(prompt("Please provide length of your desired password. Note, length should be between 8-128 characters.", "8"))
  // if length isn't numeric alert the user that we need a number return null (typeof)
  // if length is less than 8 return null
  // if length is greater than 128 return null
  while (length < 8 || length > 128 || isNaN(length)) {
   length = parseInt(prompt("Please provide length of your desired password. Note, length should be between 8-128 characters.", "8"))
  }

  var numeric = confirm("Would you like to include numbers in your password?")
  console.log(numeric);
  var lower = confirm("Would you like to include lowecase letters in your password?")
  console.log(lower);
  var upper = confirm("Would you like to include uppcase letters in your password?")
  console.log(upper);
  var special = confirm("Would you like to include special characters in your password?")
  console.log(special);
  //write 3 more confirm for other var to meet criteria

  // if no options are chosen (all = false) alert 'need at least one type of char' return null
  // return an array of all the options
  return {
    length,
    numeric,
    special,
    upper,
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



// function generatePassword() {

//   // prompt user for password length
//   var length = prompt("How many characters would you like your password to be?")
//   // check if length is between 8 and 128
//   if (length < 8 || length > 128) {
//     alert("Password must be between 8 and 128 characters")
//     return
//   }

//   // prompt user for character types
//   var options = {
//     numeric: confirm("Would you like to include numbers?"),
//     lower: confirm("Would you like to include lowercase letters?"),
//     upper: confirm("Would you like to include uppercase letters?"),
//     special: confirm("Would you like to include special characters?")
//   }

//   var userArray = []

//   // continue do build this out
//   if (options.numeric) {
//     userArray.push(number)
//   } else if (options.lower) {
//     userArray.push(lowerAlph)
//   } else if (options.upper) {
//     userArray.push(upperAlph)
//   } else (options.special)
//   userArray.push(specChar)

//   var passwd = ""

  

  

// }

// for (var i = 0; i < length; i++) {
//   var randomIndex = Math.floor(Math.random() * userArray.length)
//   var randomChar = Math.floor(Math.random() * userArray[randomIndex].length)
//   passwd += userArray[randomIndex][randomChar]
// }

// return passwd