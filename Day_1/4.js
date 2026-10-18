// Sum of First N Natural Numbers

//it is called brute force solution
// Input: 5
// Output: 15
// ✨ Encourages cumulative addition and variable usage.

console.time()
let number = parseInt(prompt("enter your number: "))
let sum = 0
for(i=0;i<=number;i++){
    sum+=i
}
console.log(sum);
console.timeEnd();

//time complexity is o(n)

// takes time for brute force solution for big numbers, this is the optimized solution for that

console.time()
let number1 = parseInt(prompt("enter your number: "))
let sum1 = (number1 * (number1+1))/2
for(i=0;i<=number1;i++){
    sum+=i
}
console.log(sum);
console.timeEnd();

//time complexity is o(1)
