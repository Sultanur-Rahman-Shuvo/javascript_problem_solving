// Find the Maximum of Three Numbers

// Input: 10 20 5
// Output: 20
// ✨ Teaches nested or chained conditional logic and comparative reasoning.


function maxOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = {a};
  } else if (b >= c) {
    max = {b};
  } else {
    max = {c};
  }
  return max;
}

console.log(maxOfThree(4, 4, 2))