// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "@", "#", "$", "&", "*", "(", ")", "_", "-", ">", "<", "?"];

function generatePassword() {
  var password = [];
  var passLength = prompt("Please enter your desired length")
  // After asking a tutor how to reject strings from passLength input, he taught me isNaN
  if (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength === "") {
    alert("Please try again. Enter a value that meets the criteria(length between 8-128)");
    return;
  }

  var includesUpperCase = confirm("Would you like to include capital letters?")
  if (includesUpperCase) {
    password = password.concat(upperCaseChar)
  }

  var includesLowerCase = confirm("Would you like to include lower case letters?")
  if (includesLowerCase) {
    password = password.concat(lowerCaseChar)
  }
  
  var includesNumber = confirm("Would you like to include numbers?")
  if (includesNumber) {
    password = password.concat(numberChar)
  }

  var includesSpecialChar = confirm("Would you like to include special characters?")
  if (includesSpecialChar) {
    password = password.concat(specialChar)
  }

  if (!includesLowerCase && !includesNumber && !includesSpecialChar && !includesUpperCase) {
    alert("Try again! You must select at least one criteria to generate the password");
    return;
  }

  password = password.join("");

  var newPass = "";
  var count = 0
  if (includesUpperCase) {
      count++;
      var randomIndex = Math.floor(Math.random() * upperCaseChar.length );
      newPass = newPass + upperCaseChar[randomIndex];
  }
  if (includesLowerCase) {
    count++;
    var randomIndex = Math.floor(Math.random() * lowerCaseChar.length );
    newPass = newPass + lowerCaseChar[randomIndex];
  }
  if (includesNumber) {
    count++;
    var randomIndex = Math.floor(Math.random() * numberChar.length );
    newPass = newPass + numberChar[randomIndex];
  }
  if (includesSpecialChar) {
    count++;
    var randomIndex = Math.floor(Math.random() * specialChar.length );
    newPass = newPass + specialChar[randomIndex];
  }
  for (var i = 0; i < passLength-count; i++) {
      var randomIndex = Math.floor(Math.random() * password.length );
      newPass = newPass + password[randomIndex];
    }
    // To randomize password output, from Stack Overflow
    newPass = newPass.split('').sort(function(){return 0.5-Math.random()}).join('');

  return newPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);