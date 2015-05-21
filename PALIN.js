var Stopwatch = require("node-stopwatch").Stopwatch;

var stopwatch = Stopwatch.create();
stopwatch.start();

var isPalindrome = function(number){
  return number.toString().split("").reverse().join("") === number.toString();
};

var getClosestPalindrome = function(listOfNumbers){
  listOfNumbers.forEach(function(test){
    var initial = test;
    while(test < 1000000){
      test++;
      if(isPalindrome(test)){
        console.log("Smallest palindrome lager then " + initial + " is " + test);
        break;
      }
    }
  });
};

var tests = [43,222,23422,2344333,234234,888888];

getClosestPalindrome(tests);

console.log("Stopwatch: " + stopwatch.elapsed.seconds)

stopwatch.stop();
