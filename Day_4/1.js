// Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// ✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.


function splitIntoDigit(num) {
    if (num === 0) return [0];
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    return digits
}

console.log(splitIntoDigit(1234));