//don't delete
var generateBtn = document.querySelector("#generate");
//prompt for password length
function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (hint: 8-128)");
  //if function to return valid password length
  if (passLength < 8 || passLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
    return generatePassword();
  }
  if (passLength >=8 && passLength <= 128) {
  //prompts for password criteria
  var speChar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numbers?");
  var lowerChar = confirm("Would you like to include lowercase letters?");
  var upperChar = confirm("Would you like to include uppercase characters?");
  }
  //if function to ensure user selects criteria
  if (speChar===false && num===false && lowerChar===false && upperChar===false) {
    alert("Please confirm a set of criteria!");
    return generatePassword();
  }
  //if functions to return criteria arrays
  if (speChar) {
    var speChar = ["!@#$%^&*()"];
  }
  if (speChar===false) {
    var speChar = [""];
  }
  if (num) {
    var num = ["0123456789"]
  }
  if (num===false) {
    var num = [""]
  }
  if (lowerChar) {
    var lowerChar = ["abcdefghijklmnopqrstuvwxyz"]
  }
  if (lowerChar===false) {
    var lowerChar = [""]
  }
  if (upperChar) {
    var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  if (upperChar===false) {
    var upperChar = [""]
  }
  //variable that is decided by the established criteria
  var randomChar = speChar + num + lowerChar + upperChar
  //for loop in order to generate password that is the length specified by the user
  var password = "";
  for (var i =0; i < passLength; i++) {
    var trueRandom = randomChar[Math.floor(Math.random() * randomChar.length)];
    password += trueRandom;
  }
  //finally return the password
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