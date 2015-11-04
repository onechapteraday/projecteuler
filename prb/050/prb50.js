/* The prime 41, can be written as the sum of six consecutive primes:
 * 41 = 2 + 3 + 5 + 7 + 11 + 13
 * This is the longest sum of consecutive primes that adds to a prime below
 * one-hundred.
 * The longest sum of consecutive primes below one-thousand that adds to a prime,
 * contains 21 terms, and is equal to 953.
 * Which prime, below one-million, can be written as the sum of the most consecutive
 * primes? */

function prb50(){
  var limit = 1000000,
      primes = eratosthenes(limit),
      longestchain = 5,
      result = 0;
  for(var p = 0; p < primes.length; p++){
    for(var lg = longestchain; lg < limit; lg++){
      var sum = 0;
      for(var i = p; i < p+lg; i++){
        sum+= primes[i];
        if(sum>=limit) break;
      }
      if(sum<limit){
        if(isprime(sum)){
          longestchain = lg;
          result = sum;
        }
      }else break;
    }
  }
  return result;
}
