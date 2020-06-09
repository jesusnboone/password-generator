// Assignment code here


//don't delete
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (hint: 8-128)");

  if (passLength < 8 || passLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
  }
  
  if (passLength >=8 && passLength < 128) {
  var speChar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numbers?");
  var lowerChar = confirm("Would you like to include lowercase letters?");
  var upperChar = confirm("Would you like to include uppercase characters?");
  }
  
  var passLength=passLength;

  if (speChar === true && num === true && lowerChar === true && upperChar === true) {
  var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
  }

  else if (speChar === false && num === true && lowerChar === true && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  }

  else if (speChar === true && num === false && lowerChar === true && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
  }

  else if (speChar === true && num === false && lowerChar === true && upperChar === false) {
    var criteria = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()"
  }

  else if (speChar === false && num === false && lowerChar === true && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }

  else if (speChar === false && num === false && lowerChar === false && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  else if (speChar === true && num === true && lowerChar === false && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
  }

  else if (speChar === false && num === true && lowerChar === false && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  }

  else if (speChar === true && num === false && lowerChar === false && upperChar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
  }

  else if (speChar === true && num === true && lowerChar === true && upperChar === false) {
    var criteria = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
  }

  else if (speChar === false && num === true && lowerChar === true && upperChar === false) {
    var criteria = "abcdefghijklmnopqrstuvwxyz1234567890"
  }

  else if (speChar === false && num === false && lowerChar === true && upperChar === false) {
    var criteria = "abcdefghijklmnopqrstuvwxyz"
  }

  else if (speChar === true && num === true && lowerChar === false && upperChar === false) {
    var criteria = "1234567890!@#$%^&*()"
  }

  else if (speChar === false && num === true && lowerChar === false && upperChar === false) {
    var criteria = "1234567890"
  }

  else if (speChar === true && num === false && lowerChar === false && upperChar === false) {
    var criteria = "!@#$%^&*()"
  }

  else if (speChar === false && num === false && lowerChar === false && upperChar === false) {
    var criteria = ""
  }
  var password = "";

  for (var i=0; i<=passLength; i++) {
    password = password + criteria.charAt(Math.floor(Math.random() * Math.floor(criteria.length - 1)));
  }

  return password
}


//don't delete
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//don't delete
generateBtn.addEventListener("click", writePassword);