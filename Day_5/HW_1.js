// Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors


function countAllFactors(num) {
    let factorCount = 0
    let loopCount = 0

    for(let i = 1; i <= Math.sqrt(num); i++) {
        loopCount++

        if(num % i === 0) {
            factorCount++

            const otherPair = num / i
            if(i !== otherPair) factorCount++
        }
    }

    console.log({num, loopCount});
    return factorCount
}

console.log(countAllFactors(24));