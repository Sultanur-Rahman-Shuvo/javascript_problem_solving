// Find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input: 12, 18
// Output: HCF = 6

function findHCF(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   console.log({loopCount});
   return divisor
    
}

console.log(findHCF(20, 36));