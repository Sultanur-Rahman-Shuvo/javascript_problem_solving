// Print Squares of Numbers from 1 to N

// Input: 5
// Output: 1 4 9 16 25
// ✨ Introduces arithmetic pattern generation.

console.time()
let number = 10
for(i=0;i<=number;i++){
    // console.log(i**2n)
    // console.log(i**i)
    console.log(Math.pow(i,2))
}
console.timeEnd();