// Reverse a Number

// Input: N = 1234
// Output: 4321
// ✨ Teaches how to extract and reconstruct digits using % and /.


function reverseDigits(num) {
    if (num === 0) return [0];
    const digits = []

    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reversedNumber = 0
    
    for(let i = 0; i < digits.length; i++) {
     reversedNumber += digits[i] * 10 ** i
    }

    let answer = []
    let temp = reversedNumber
    while(temp > 0) {
        answer.unshift(temp % 10)
        temp = Math.floor(temp / 10)
    }
    return answer
}

console.log(reverseDigits(2384));