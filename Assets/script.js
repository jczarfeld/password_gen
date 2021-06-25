var specChars = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//var concatChars=specChars.concat(numChars.lowerChars,upperChars);
var newGenPW =[];
var passwordText = document.querySelector("#password");




function generatePass() {
  var included= [];
  var passLength= prompt("Enter character length of desired password");
// Add validation for user input for min and max length-do an if then else
if (passLength<=7|| passLength>128) {

  alert("Must be between 8 and 128 characters")
  return;
};
  console.log(passLength);
//Check if user wants special characters in their password
  var containsSpecChars = confirm("Click OK to confirm special characters in your password");
  if (containsSpecChars){
    var included = included.concat(specChars);

  console.log(containsSpecChars);}

  //check if user wants lowercase characters in their pass
  var containsLowerChars = confirm("Click OK to confirm lowercase characters in your password");
  if (containsLowerChars){
    var included = included.concat(lowerChars);
  
  console.log(containsLowerChars);}



  //check if user wants uppercase char in their pass
  var containsUpperChars = confirm("Click OK to confirm uppercase characters in your password");
  if (containsUpperChars){
    var included = included.concat(upperChars);
  
  console.log(containsUpperChars);}

//check if they want numbers
  var containsNumbers = confirm("Click OK to confirm numbers in your password");
  if (containsNumbers){
    var included = included.concat(numChars);
  
  console.log(containsNumbers);}

//randomization of selected character types into desired length
  for (let i=0; i<passLength; i++) {
    var randomPW = Math.floor(Math.random() * (included.length));
    console.log(randomPW);
    var charChoice = included[randomPW];
    console.log(charChoice);

    newGenPW.push(charChoice);

  }
  console.log(newGenPW);

 



}


// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //the join function will remove commas from the output, which is an array

  passwordText.value = (newGenPW.join(""));

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePass();