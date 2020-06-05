// Assignment code here


//don't delete
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var pass = prompt("How long would you like your password to be? (hint: 8-128)");

  if (pass < 8 || pass > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
  }
  
  if (pass >=8 && pass < 128) {
  var spechar = confirm("Would you like to include special characters?");
  var 
  }

  
}


//don't delete
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//don't delete
generateBtn.addEventListener("click", writePassword);