// Find the Greatest Factor of a Number (Other Than Itself)

// Input: N = 36
// Output: 18

function findGreatestFactor(num) {
    let loopCount = 0

    for(let i = Math.floor(num / 2); i >= 1; i--) {
        loopCount++

        if(num % i === 0) {
            console.log({num, loopCount});
            return i
        }
    }

    return 1
}

console.log(findGreatestFactor(36));