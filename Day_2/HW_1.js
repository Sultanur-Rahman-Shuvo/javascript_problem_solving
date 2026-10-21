// Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// Input: A
// Output: Uppercase Letter
// ✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
// 🔍 Concepts: ASCII range checks, compound && and || operators.


function checkCharacter(char) {
  let code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return "Uppercase Letter";
  } else if (code >= 97 && code <= 122) {
    return "Lowercase Letter";
  } else if (code >= 48 && code <= 57) {
    return "Digit";
  } else {
    return "Special Character";
  }
}
console.log(checkCharacter("A")); // uppercase letter
console.log(checkCharacter("a")); // lowercase letter
console.log(checkCharacter("7")); // digit
console.log(checkCharacter("@")); // special character
