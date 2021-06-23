var specChars = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];


function generatePass() {
  var passLength= prompt("Enter character length of desired password");
  // Add validation for user input for min and max length-do an if then else
   console.log(passLength);
//Check if user wants special characters in their password
  var containsSpecChars = confirm("Click OK to confirm special characters in your password");
  console.log(containsSpecChars);
//check if user wants lowercase characters in their pass
  var containsLowerChars = confirm("Click OK to confirm lowercase characters in your password");
  console.log(containsLowerChars);
//check if user wants uppercase char in their pass
  var containsUpperChars = confirm("Click OK to confirm uppercase characters in your password");
  console.log(containsUpperChars);
  var containsNumbers = confirm("Click OK to confirm numbers in your password");
  console.log(containsNumbers);
}


// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePass();