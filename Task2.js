const prompt = require("prompt-sync")();
let userChoice = 1;
let total = 1;
let sum = 0;
while (userChoice != -1) {
let input = Number(prompt("Enter a new integer: "));
sum += input;
let average = sum/total;
console.log("The running average is "+ average);
userChoice = prompt("Do you wish to continue ( Enter -1 to stop ): ");
total += 1;
}


