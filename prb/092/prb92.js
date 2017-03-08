/* A number chain is created by continuously adding the square of the digits in a
 * number to form a new number until it has been seen before.
 *
 * For example,
 *
 * 44 → 32 → 13 → 10 → 1 → 1
 * 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89
 *
 * Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop.
 * What is most amazing is that EVERY starting number will eventually arrive at 1 or
 * 89.
 *
 * How many starting numbers below ten million will arrive at 89? */

function prb92(){
  var sum = 0;
  var cache = {};

  cache[1] = 1;
  cache[89] = 89;

  var squarechain = function(x) {
    if (cache[x])
      return cache[x];

    else {
      var digits = [],
          sum = 0;

      while(x > 0){
        digits.push(x % 10);
        x = ~~(x / 10);
      }

      for (var i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], 2);
      }

      return squarechain(sum);
    }
  }

  for (var i = 1; i < 10000000; i++){
    cache[i] = squarechain(i);

    if (cache[i] == 89) {
      sum++;
    }
  }

  return sum;
}

