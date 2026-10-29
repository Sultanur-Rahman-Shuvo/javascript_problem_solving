// Print Hollow Inverted Pyramid

// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.


// Print Hollow Inverted Pyramid

// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.

const row = 5

for(let i = 1; i <= row; i++) {
    let str = ''

    for(let j = 1; j <= 2*row - i; j++) {
        if(j <= i - 1) {
            str += ' '
        } else if(i === 1 || j === i || j === 2*row - i) {
            str += '*'
        } else {
            str += ' '
        }
    }
    console.log(str);
}