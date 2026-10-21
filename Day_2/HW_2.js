// Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5

// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene


function checkTriangle(a, b, c) {
  // First, check whether the sides form a valid triangle
  if (
    a <= 0 || b <= 0 || c <= 0 ||
    a + b <= c ||
    a + c <= b ||
    b + c <= a
  ) {
    return "Invalid Triangle";
  }

  // Sort the sides so c is the largest
  let sides = [a, b, c].sort((x, y) => x - y);
  let x = sides[0];
  let y = sides[1];
  let z = sides[2];

  // Check for a right-angled triangle
  if (x * x + y * y === z * z) {
    return "Right-Angled Triangle";
  } else if (a === b && b === c) {
    return "Equilateral Triangle";
  } else if (a === b || b === c || a === c) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
}

console.log(checkTriangle(3, 4, 5));
// Right-Angled Triangle

console.log(checkTriangle(5, 5, 5));
// Equilateral Triangle

console.log(checkTriangle(5, 5, 8));
// Isosceles Triangle

console.log(checkTriangle(4, 5, 6));
// Scalene Triangle
