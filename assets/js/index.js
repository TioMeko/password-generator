var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "1234567890".split("");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// Function that generates the password based on the criteria
function generatePassword() {
  // Empty Arrays to hold the data
  var placeholder = [];
  var generatedPassword = [];

  // Asks user for password length then checks conditional before continuing
  var passLength = prompt('How long do you want your password to be? (Between 8 and 128)');

  if (passLength < 8 || passLength > 128){
    alert("ERROR: Please click `Generate Password` again and choose a number between 8 and 128!");
    return "";
  };

  // Asks user to confirm choices and uses conditionals to add the values to the blank placeholder array.
  var lowerCaseChoice = confirm("Do you want lower case letters?");
  var upperCaseChoice = confirm("Do you want upper case letters?");
  var numbersChoice = confirm("You want any numbers?");
  var specialCharactersChoice = confirm("Do you want special characters?");

  if (!lowerCaseChoice && !upperCaseChoice && !numbersChoice && !specialCharactersChoice){
    alert("You must choose at least 1 character type. Please start over!");
    return "";
  }

  if (lowerCaseChoice){

    placeholder = placeholder.concat(lowerCase);
  }

  if (upperCaseChoice){
    placeholder = placeholder.concat(upperCase);
  }

  if (numbersChoice){
    placeholder = placeholder.concat(numbers);
  }

  if (specialCharactersChoice){
    placeholder = placeholder.concat(specialCharacters);
  }

  // Runs a loop to add random combinations for the generatedPassword array
  for (var i = 0; i < passLength; i++){
    generatedPassword.push(placeholder[Math.floor(Math.random() * placeholder.length)]);
  }

  // Joins the generatedPassword array into a single string seperated by no space and returns the value
  return generatedPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);