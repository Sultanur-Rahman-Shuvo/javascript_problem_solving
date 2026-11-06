// Check if a Number is an Armstrong Number (also called a Narcissistic Number)

// Input: N = 153
// Output: Armstrong Number
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.


function isArmstrong(num) {
    const originalNum = num
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    
    let digitsPowerSum = 0

    for(let i=0; i < digits.length; i++) {
        digitsPowerSum += digits[i] ** digits.length
    }
    
    return digitsPowerSum === originalNum
}

console.log(isArmstrong(153))