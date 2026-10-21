// Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.

function checkVowel(char = '0') {
  if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
    return 'Vowel';
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return 'Consonant';
  }
  return 'Not a valid alphabet';
}