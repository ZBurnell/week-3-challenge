// Assignment Code
var char_upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var char_lower = ("abcdefghijklmnopqrstuvwxyz")
var char_num = ("0123456789")
var char_special = ("! #$%&'()*+,-./:;<=>?@/[]^_`{|}~")
var characters = ""
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Asking user how they would like password formatted
  length = Number(window.prompt("How long would you like your password?", "between 8 - 123"));
  upper = confirm("Would you like to add uppercase characters to your password?");
  lower = confirm("Would you like to add lowercase characters to your password?");
  num = confirm("Would you like to add numbers to your password?");
  special = confirm("Would you like to add special characters to your password?");

    //Simple
      if(upper && !lower && !num && !special) {
        characters = generateRandomString(upper, length); 
    } else if (!upper && lower && !num && !special) {
        characters = generateRandomString(lower, length);
    } else if (!upper && !lower && num && !special) {
        characters = generateRandomString(Num, length);
    } else if (!upper && !lower && !num && special) {
        characters = generateRandomString(special, length);
    //complex with 2 var
    } else if (upper && lower && !num && !special) {
        characters = generateRandomString(upper, lower, length);
    } else if (upper && !lower && num && !special) {
        characters = generateRandomString(upper, num, length);
    } else if (upper && !lower && !num && special) {
        characters = generateRandomString(upper,special, length);
    } else if (!upper && lower && num && !special) {
        characters = generateRandomString(lower,num, length);
    } else if (!upper && lower && !num && special) {
        characters = generateRandomString(lower,special, length);
    } else if (!upper && !lower && num && special){
        characters = generateRandomString(num,special, length);
    //Complex with 3 var
    } else if (upper && lower && num && !special) {
        characters = generateRandomString(upper, lower,num, length);
    } else if (upper && lower && !num && special) {
        characters = generateRandomString(upper, lower, special, length);
    } else if (!upper && lower && num && special) {
        characters = generateRandomString(lower, num, special, length);
    //complex with all
    } else if (upper && lower && num && special) {
    }
    characters = String
}

function writePassword() {
  var password = generatePassword();
  passwordTextvalue = password
 }
 



generateBtn.addEventListener("click", writePassword);
    function generateRandomString(characters, length) {
        var result = "";
        for (var i = 0; i < length; i++) {
          password += generatePassword(Math.floor(Math.random() * characters.length));
        }
        return password;
}


 // Write password to the #password input


 
 // passwordText.value = password;
  


// Add event listener to generate button
