/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
 * the 6th prime is 13.
 * What is the 10 001st prime number? */

function prb7(){
  var primes = eratosthenes(150000);
  return primes[10000];
}
