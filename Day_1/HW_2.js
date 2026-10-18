// Find the sum of all odd numbers up to N

// Input: 10
// Output: 25 (1 + 3 + 5 + 7 + 9)
// ✨ Combines looping with conditional accumulation.

let n = 10;
let sum = 0;

for (let i =1; i<=n;i++) {
    if (i%2 !== 0) {
        sum += i;
    }
}
console.log(sum);