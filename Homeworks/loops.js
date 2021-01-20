
fizzBuzzGame(100)
function fizzBuzzGame(lastNum){
    for(let i=1; i < lastNum; i++){ 
        // check for prime
        if(isPrime(i)){
            console.log('Prime');
        }
        // multiples of three and five
        else if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizzbuzz');
        }
        // multiples of three 
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        // multiples of five 
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{     
            console.log(i);
        }
    }
}

// check prime
function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
  }

