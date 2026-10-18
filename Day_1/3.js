// Print All Even Numbers from 1 to N

// Input: 10
// Output: 2 4 6 8 10
// ✨ Introduces conditional checks inside loops.

let number = parseInt(prompt("enter your number: "))
for(i=0;i<=number;i++){
    if (i%2 == 0) {
        console.log(i);
    }
}