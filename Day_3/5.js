// Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.


const row = 6;

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= row; j++) {
        if(i === 1 || i === row || j === 1 || j === row) {
            str = str + '*'
        } else {
            str = str + ' '
        }
    }
    console.log(str);
}