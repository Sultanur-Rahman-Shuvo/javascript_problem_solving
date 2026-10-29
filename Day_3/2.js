// Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
// ✨ Reinforces decreasing nested loop structure.

const row = 5

for(let i = row; i >=1; i--) {
    let str = ''

    for(let j = i; j >= 1; j--) {
        str = str + '*'
    }

    console.log(str);
}