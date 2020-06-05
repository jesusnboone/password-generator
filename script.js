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
  var num = confirm("Would you like to include numbers?");
  var lowerchar = confirm("Would you like to include lowercase letters?");
  var upperchar = confirm("Would you like to include uppercase characters?");
  }

  if (spechar) {
    var spechar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","{","}","[","]"];
  }

  if (num) {
    var num = [0,1,2,3,4,5,6,7,8,9]
  }
  
  if (lowerchar) {
    var lowerchar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  }

  if (upperchar) {
    var upperchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  }

  var specharrandom = spechar[Math.floor(Math.random() * spechar.length)];
  var numrandom = num[Math.floor(Math.random() * num.length)];
  var lowercharrandom = lowerchar[Math.floor(Math.random() * lowerchar.length)];
  var uppercharrandom = upperchar[Math.floor(Math.random() * upperchar.length)];

  var ranchargen = [specharrandom,numrandom,lowercharrandom,uppercharrandom];

  var trueranchar = ranchargen[Math.floor(Math.random() * ranchargen.length)];

  console.log(trueranchar)
  console.log(trueranchar)
  console.log(trueranchar)
  console.log(trueranchar)

  return trueranchar



}


//don't delete
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//don't delete
generateBtn.addEventListener("click", writePassword);