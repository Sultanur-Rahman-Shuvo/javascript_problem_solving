// Find the HCF and LCM of Three Numbers

// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48

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

function findHCFAndLCM(a, b, c) {
    let loopCount = 0

    const hcfAB = findHCF(a, b)
    const hcf = findHCF(hcfAB, c)
    const lcmAB = findLCM(a, b)
    const lcm = findLCM(lcmAB, c)

    
    console.log({loopCount});

    return {
        HCF: hcf,
        LCM: lcm
    }
}

console.log(findHCFAndLCM(8, 12, 16));