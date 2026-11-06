// Check if a Number is a Palindrome

// Input: N = 121
// Output: Palindrome
// ✨ Compares original and reversed numbers to detect symmetry.


function isPalindrome(num) {
    const originalNumber = num;
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reveredNumber = 0
    
    for(let i = 0; i < digits.length; i++) {
        reveredNumber += digits[i] * 10 ** i
    }

    return reveredNumber === originalNumber
}

console.log(isPalindrome(121))