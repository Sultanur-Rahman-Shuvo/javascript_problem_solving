// Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

function generateNumberFromWholeAndFractionalDigit(wholeDigits, fractionalDigits) {
   let wholePart = 0;
   let fractionPart = 0;

    for(let i = 0; i < wholeDigits.length; i++) {
        wholePart += wholeDigits[i] * 10 ** (wholeDigits.length - i - 1)
    }

    for(let i = 0; i < fractionalDigits.length; i++) {
        fractionPart += fractionalDigits[i] * 10 ** -(i + 1)
    }

    return wholePart + Number(fractionPart.toFixed(10))
}

console.log(generateNumberFromWholeAndFractionalDigit([1, 2], [3, 4]));