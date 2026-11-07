// Find the LCM (Least Common Multiple) of Two Numbers

// Input: 12, 18
// Output: LCM = 36


function findLCM(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   return a * b / divisor
}