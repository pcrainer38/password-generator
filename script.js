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
// var spCharArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\',  '^', '_', '`', '{', '|', '}', '~'];

var characters = [];
var newPassword = "";

function generatePassword (length, inclNum, upperCase, lowerCase) {
    var numChar = window.prompt("How many characters would your password to be?", "Between 8 and 128");
    console.log(numChar);
    var inclNum = window.prompt ("Would you like to include numbers?", "yes or no");
    console.log(inclNum);
    var upperCase = window.prompt ("Would you like to include uppercase letters?", "Yes or no");
    console.log(upperCase);
    var lowerCase = window.prompt ("Would you like to include lower case letters?", "yes or no");
    console.log(lowerCase);
    // var symbols = window.prompt ("Would you like to include special characters?", "yes or no");
    
    if (inclNum) {
      var characters = numArr.concat(characters);
    }
    if (upperCase) {
      var characters = upCaseArr.concat(characters);
    }
    if (lowerCase) {
      var characters = lowCaseArr.concat(characters);
    } 

    console.log(characters);
    

    for(i = 0; i < numChar.length; i++) {
      // console.log(numChar);
      newPassword = characters[i][Math.floor(Math.random() * numChar.length)];
    }

return (newPassword);

    }
    
  

writePassword()

// generatePassword();









