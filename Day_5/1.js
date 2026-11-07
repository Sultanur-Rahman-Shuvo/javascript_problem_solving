// Print All Factors of a Number

// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

function getAllFactors(num) {
    const factors = []

    let loopCount = 0
    for(let i = 1; i <= Math.sqrt(num); i++) {
        loopCount++
        if(num % i === 0) {
            factors.splice(factors.length / 2, 0, i)
            const otherPair = num / i
            if(i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair)
        } 
    }
    console.log({num, loopCount});
    return factors
}

console.log(getAllFactors(100));