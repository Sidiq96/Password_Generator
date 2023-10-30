// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  var passwordLength = prompt(
    "How long do you want your password to be? (It must be between 8 and 128 characters)"
  );
  var length = parseInt(passwordLength);
  // This code is used to ensure that the user's input for the password length, which is collected as a string through the prompt function, is converted into a numeric format so that it checks if the password length is within a specified range (e.g., between 8 and 128 characters).

  // this code ensures that the user's input for the password length is a valid number within the specified range and provides feedback to the user if the input is not valid.
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128 for the password length.");
    return;
  }

  // these lines of code asks the user for character types to include in their password
  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  if (
    !includeSpecial &&
    !includeNumeric &&
    !includeLowercase &&
    !includeUppercase
  ) {
    // This if statement checks to see if the user has selected at least one of these or otherwise they have to re-click the button on the password generator
    alert("At least one character type must be selected.");
    return;
  }

  // this an object that stores user choices
  var passwordOptions = {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
  };

  return passwordOptions;
}

// These lines of code are designed to be used in situations where it needs to choose a random array, which can be useful for various applications
function getRandom(arr) {
  var RandomIndex = math.floor(math.random() * arr.length);
  return arr[RandomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
