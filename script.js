// Assignment code here


//don't delete
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (hint: 8-128)");

  if (passLength < 8 || passLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
  }
  
  if (passLength >=8 && passLength < 128) {
  var spechar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numbers?");
  var lowerchar = confirm("Would you like to include lowercase letters?");
  var upperchar = confirm("Would you like to include uppercase characters?");
  }
  
  var passLength=passLength;

  if (spechar === true && num === true && lowerchar === true && upperchar === true) {
  var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  }

  if (spechar === false && num === true && lowerchar === true && upperchar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  }
  if (spechar === false && num === false && lowerchar === true && upperchar === true){
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }

  if (spechar === false && num === false && lowerchar === false && upperchar === true) {
    var criteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (spechar === false && num === false && lowerchar === false && upperchar === false) {
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