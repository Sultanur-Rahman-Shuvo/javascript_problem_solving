// Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28

function sumAllFactors(num) {
    let sum = 0
    let loopCount = 0

    for(let i = 1; i <= Math.sqrt(num); i++) {
        loopCount++

        if(num % i === 0) {
            sum += i

            const otherPair = num / i
            if(i !== otherPair) sum += otherPair
        }
    }

    console.log({num, loopCount});
    return sum
}

console.log(sumAllFactors(12));