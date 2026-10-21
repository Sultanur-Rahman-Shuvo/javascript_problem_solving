// Calculate Income Tax Based on Slabs
// Input: Income = ₹7,50,000

// Output: Tax = ₹62,500

// ✨ Applies progressive slab logic similar to electricity bill but with financial context.

// Example Logic (example slabs):

// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%
// 🔍 Requires cumulative calculation using nested if–else or multiple slab loops.


function calculateIncomeTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = (250000 * 0.05) +
          (income - 500000) * 0.20;
  } else {
    tax = (250000 * 0.05) +
          (500000 * 0.20) +
          (income - 1000000) * 0.30;
  }

  return tax;
}

console.log(calculateIncomeTax(750000));
// 62500
