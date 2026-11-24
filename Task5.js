const prompt = require("prompt-sync")();
let consonant = 0;
let vowels = 0;
let vowell = "aeiouAEIOU";
let input = prompt("Enter any word: ");
for (letters of input) {
for (word of vowell) {
if (letters == word) {
vowels += 1;
}
if (letters != word) {
consonant +=1;
}
}
}
console.log("the number of consonants are " + consonant );
console.log("the number of vowels are " + vowels );

