const prompt = require ("prompt-sync")();
let word = prompt ("Enter any word to check if it's a palindrome word: ");
let reverseWord = ""
for (character of word){
	reverseWord = character + reverseWord;
}
if (reverseWord === word){
	console.log ("It is a a palindrome")
}
else {
	console.log("It is not  a palindrome")
}
