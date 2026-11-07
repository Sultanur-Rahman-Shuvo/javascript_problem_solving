// Check if a Number is a Perfect Number

// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.

function checkPerfectNumber(num) {
    let sum = 0
    let loopCount = 0

    for(let i = 1; i <= Math.sqrt(num); i++) {
        loopCount++

        if(num % i === 0) {
            if(i !== num) sum += i

            const otherPair = num / i
            if(i !== otherPair && otherPair !== num) sum += otherPair
        }
    }

    console.log({num, sum, loopCount});

    if(sum === num) {
        return "perfect number"
    } else {
        return "not a perfect number"
    }
}

console.log(checkPerfectNumber(28));