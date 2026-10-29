// Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.


const row = 5

for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow || j > row - currentRow + 1 && j < row + currentRow - 1 && i !== 2*row - 1) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}