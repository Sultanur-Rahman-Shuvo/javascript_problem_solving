// Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() or Math.floor() method.

function separateParts(num) {
   const fractionPart = Number((num % 1).toFixed(10))
   const wholePart = Number((num - fractionPart).toFixed(10))
   return {wholePart, fractionPart}
}

console.log(separateParts(12.34));