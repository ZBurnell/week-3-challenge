// Assignment Code
var char_upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var char_lower = ("abcdefghijklmnopqrstuvwxyz")
var char_num = ("0123456789")
var char_special = ("! #$%&'()*+,-./:;<=>?@/[]^_`{|}~")
var characters = []
var generateBtn = document.querySelector("#generate");
 

length = Number(window.prompt("How long would you like your password?", "between 8 - 123"));

 if (length < 8 && length > 123 === null){
  alert("please enter a valid number");
  } else (length > 8 && length < 123)
     var start = document.createElement[characters];
     console.log(length)

char_upper = confirm("Would you like to add uppercase characters to your password?");

  if(upper === true){
    var upper = document.appendChild[characters];
  } else (upper === false)
    var upper = null;

char_lower = confirm("Would you like to add lowercase characters to your password?");

  if(lower === true){
    var lower = document.appendChild[characters];
  } else (lower === false)
    var lower = null;

num = confirm("Would you like to add numbers to your password?");

  if(num === true){
    var num = document.appendChild[characters];
  } else (num === false)
    var num = null;

char_special = confirm("Would you like to add special characters to your password?");

  if(special === true){
    var special = document.appendChild[characters];
  } else (special === false)
    var special = null;

 // Write password to the #password input

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 }
 
  passwordText.value = password;
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  writePassword();
