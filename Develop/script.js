// Assignment Code
var generateBtn = document.querySelector("#generate");

<<<<<<< HEAD
function generatePassword() {
  var passLength = '';
  var passLength = prompt('How long do you want your password to be? (Between 8 and 128)');
  console.log(`THIS IS A RENEWED ${passLength}`);
  
  if (passLength >= 8 && passLength <=128){
    console.log(`Before going to writePassword: ${passLength}`);
    return passLength;
  }else {
    alert("ERROR: Please choose a number between 8 and 128!");
    console.log(`This is a false statement log ${passLength}`);
    generatePassword();
  };

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(`THIS IS THE REAL VALUE: ${password}`);
=======
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
>>>>>>> fd6a6e9d0a00c16297f2f44cc9b4ac51dd3d0acf
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<<<<<<< HEAD

=======
>>>>>>> fd6a6e9d0a00c16297f2f44cc9b4ac51dd3d0acf
