const prompt = require ("prompt-sync")();
word = prompt ("Enter any  Word: ")
reversedWord = ""
for (character of word) {
	reversedWord = character + reversedWord
}
console.log (reversedWord)
