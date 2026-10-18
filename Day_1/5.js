// Product (Factorial) of N

// brute force solution
// Input: 5
// Output: 120
// ✨ Reinforces loop control with multiplication logic.

console.time()
let number = 4n
let product = 1n
for(i=1n;i<=number;i++){
    product*=i
}
console.log(product);
console.timeEnd();