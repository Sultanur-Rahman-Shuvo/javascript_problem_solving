// Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.


const row = 5

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2) 
    }
    console.log(str);
}