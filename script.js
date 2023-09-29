// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArr = ['!','#', '$', '%', '&', '(', ')', '*', '+', '-', ';', ':', '@']


var characters = [];
var newPassword = "";

function generatePassword () {
    var numChar = parseInt(window.prompt("How many characters would your password to be?", "Between 8 and 128"));

    if (Number.isNaN(numChar)) {
      alert("Length has to be a number. Please, retry.");
      return("Length has to be a number. Please, retry.");
    } 

    if(numChar < 8 || numChar > 128) {
      alert("Length has to be a number between 8 and 128. Please, retry.");
      return("Length has to be a number between 8 and 128. Please, retry.");
    }

    console.log(numChar);
    var inclNum = window.confirm ("Would you like to include numbers?", "yes or no");
    console.log(inclNum);
    var upperCase = window.confirm ("Would you like to include uppercase letters?", "Yes or no");
    console.log(upperCase);
    var lowerCase = window.confirm ("Would you like to include lower case letters?", "yes or no");
    console.log(lowerCase);
    var symbols = window.confirm ("Would you like to include special characters?", "yes or no");
 

    if (inclNum) {
       characters = numArr.concat(characters);
    } 
    console.log(characters);
    if (upperCase) {
       characters = upCaseArr.concat(characters);
    }
    console.log(characters);
    if (lowerCase) {
      characters = lowCaseArr.concat(characters);
    } 
    console.log(characters);

    if (symbols) {
     characters = specialCharArr.concat(characters);
    }

    console.log(characters);
    

    for(i = 0; i < numChar; i++) {

      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }

  return (newPassword);

}












