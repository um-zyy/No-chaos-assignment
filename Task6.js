const prompt = require("prompt-sync")();
let input = prompt("Enter a word: ");
let counter = 1;
for (letter of input) {
if (counter % 2 == 0) {
console.log(letter)
}
counter += 1;
}
