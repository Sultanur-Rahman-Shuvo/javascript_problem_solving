// Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****
// ✨ Teaches nested loops and increasing sequence printing.


const row = 5
for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + '*'
    }
    console.log(str);
}