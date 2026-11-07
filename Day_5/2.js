// Print All Multiples of a Number up to N

// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]

function getMultiples(num, limit) {
    const multiples = []

    for(let i = num; i <= limit; i+=num) {
        multiples.push(i)
    }
    return multiples;
}

console.log(getMultiples(5, 50));