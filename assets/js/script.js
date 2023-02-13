
//Declaring password criteria variables 
var upperAlph; //uppercase letters
var lowerAlph; //lowercase letter
var specChar; //special characters
var number; //number

//assigning the password criteria variables to values
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//splitting out commas in array so commas are not considered characters for password
var specChar = "!,#,$,%,&,(,),*,+,-,.,/,:,;,<,=,>,?,@,[,],^,_,{,|,},~,".split(",")
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//accessing random number in array by generating random float from zero to array's length and rounding to whole number. Synopsis of this function found/understood at: https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array 
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
//converting arugment into a string, parsing the string and returning a number or NaN in some cases, where while loop will come back into play.
function getOptions() {
  var length = parseInt(prompt("Please provide length of your desired password. Note, length should be between 8-128 characters.", "8"))
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