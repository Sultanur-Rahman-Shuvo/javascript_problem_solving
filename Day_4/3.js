// Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.


function removeDecimal(num) {
    while(num !== Math.floor(num)) {
        num = num * 10
    }
    return num
}

console.log(removeDecimal(123.4));