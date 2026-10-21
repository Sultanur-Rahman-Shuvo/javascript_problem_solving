// Check if a Number is Positive, Negative, or Zero

// Input: -9
// Output: Negative
// ✨ Practices multi-branch conditions and comparison operators.

function checkPositiveOrNegative(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  }
  return 'Zero';
}

console.log(checkPositiveOrNegative(4))