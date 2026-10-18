// Sum of All Even Numbers up to N

//brute force solution
// Input: 10
// Output: 30 (2+4+6+8+10)
// ✨ Combines loops + condition + accumulation.

console.time()
let number = 10n
let sum = 0n
for(i=0n;i<=number;i++){
    if (i % 2n == 0n) {
        sum+=i
    }
}
console.log(sum);
console.timeEnd();