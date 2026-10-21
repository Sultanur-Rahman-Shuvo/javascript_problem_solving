// Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.


function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = (100 * 5) + (units - 100) * 7;
  } else if (units <= 300) {
    total = (100 * 5) + (100 * 7) + (units - 200) * 10;
  } else {
    total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
  }
  return total;
}

console.log(calculateElectricityBill(200))