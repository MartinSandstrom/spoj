var Stopwatch = require("node-stopwatch").Stopwatch;

var stopwatch = Stopwatch.create();
stopwatch.start();

var isPrime = function(input){
  if(input === 0 || input === 1 || input === 2 || input === 3) return true;
  if(input % 2 === 0) return false;

  for (var i = 3; i < input; i++) {
    if(input % i === 0)
      return false;
  }
  return true;
}

var generatePrimes = function(start, stop){
  console.log("All prime numbers between " + start + " and " + stop + " are: ");
  while (start < stop){
    if(isPrime(start)) console.log(start)
    start++;
  }
}

generatePrimes(1,100);

console.log('Stopwatch: ' + stopwatch.elapsed.seconds)

stopwatch.stop();
