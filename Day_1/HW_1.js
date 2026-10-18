// Print all numbers divisible by 3 and 5 up to N

// Input: 30
// Output: 15 30
// ✨ Reinforces conditional checks inside loops.

let n = 30;
for (let i=1;i<=n; i++) {
    if (i%3 === 0 && i%5 === 0){
        console.log(i);
    }
}