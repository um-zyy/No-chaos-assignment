const prompt = require('prompt-sync')();

let Numbers = 50;
let trials = 30;
while(trials > 0) {
	let number = prompt("Guess a number from 1 to 100: ")
	if(number == Numbers){
		console.log("Congrats you won!!!")
		break;
	}else{
	trials--
	console.log("Wrong")
	console.log("Number of attempts you have left are " + trials)
	continue
	}
	
}
