/* In mathematics, the sieve of Eratosthenes is a simple, ancient algorithm
 * for finding all prime numbers up to any given limit. */

function eratosthenes(n){
  var detectprimes = new Array(n),
      primes = new Array();

  detectprimes[0] = false;
  detectprimes[1] = false;

  for(var i=2; i<detectprimes.length; i++)
    detectprimes[i] = true;

  for(var p=2; p<Math.sqrt(n); p++){
    if(detectprimes[p]){
      for(var j=p*p; j<n; j+=p)
        detectprimes[j] = false;
    }
  }

  for(var i=0; i<n; i++){
    if(detectprimes[i])
      primes.push(i);
  }

  return primes;
}
