// Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.


const row = 5

for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}