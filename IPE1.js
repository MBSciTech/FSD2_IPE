const fs = require('fs');

// Step 1: Write the input range to a file
fs.writeFileSync('input.txt', '1 1000');

// Step 2: Read input values from file
const data = fs.readFileSync('input.txt', 'utf8');
const [start, end] = data.split(' ').map(Number);

// Step 3: Function to check Kaprekar number
function isKaprekar(n) {
    const sq = (n * n).toString();
    for (let i = 1; i < sq.length; i++) {
        const left = parseInt(sq.substring(0, i));
        const right = parseInt(sq.substring(i));
        if (right !== 0 && left + right === n) return true;
    }
    return n === 1; // Special case: 1 is a Kaprekar number
}

// Step 4: Find Kaprekar numbers in range
const kaprekarNumbers = [];
for (let i = start; i <= end; i++) {
    if (isKaprekar(i)) {
        kaprekarNumbers.push(i);
    }
}

// Step 5: Output result
console.log("Kaprekar Numbers between", start, "and", end, ":");
console.log(kaprekarNumbers.join(', '));

// Optionally write to output file
fs.writeFileSync('output.txt', kaprekarNumbers.join(', '));
