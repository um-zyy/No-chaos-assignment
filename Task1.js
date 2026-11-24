let firstNumber = 1;
let secondNumber = 0;
let thirdNumber = 0;
for ( firstNumber = 1; firstNumber < 10; firstNumber++ ) {
for ( secondNumber = 0; secondNumber < 10; secondNumber++ ) { 
for ( thirdNumber = 0; thirdNumber < 10; thirdNumber++ ){
let square = ( firstNumber * firstNumber ) + ( secondNumber * secondNumber ) + ( thirdNumber * thirdNumber );
let number = ( firstNumber * 100) + ( secondNumber * 10 ) + ( thirdNumber );
if ( square == number ) {
console.log(number);
}
}
}
}

