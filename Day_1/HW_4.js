// Print only the numbers that are both even and perfect squares

// Input: 1 to 20
// Output: 4 16
// ✨ Encourages combining two conditions within one loop.

let n = 20;

for (let i=1;i<=n; i++) {
    let r = Math.sqrt(i);
    
    if (i%2 === 0 && Number.isInteger(r)) {
        console.log(i);
    }
}