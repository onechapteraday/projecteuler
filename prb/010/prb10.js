/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million. */

function prb10(){
  var primes = eratosthenes(2000000);
  var result = primes.reduce(function(a, b){
    return a + b;
  });
  return result;
}
