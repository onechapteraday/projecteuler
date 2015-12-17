/* Euler's Totient function, phi(n) [sometimes called the phi function], is used to
 * determine the number of positive numbers less than or equal to n which are
 * relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than
 * nine and relatively prime to nine, phi(9)=6.
 * The number 1 is considered to be relatively prime to every positive number, so
 * phi(1)=1.
 * Interestingly, phi(87109)=79180, and it can be seen that 87109 is a permutation
 * of 79180.
 * Find the value of n, 1 < n < 107, for which phi(n) is a permutation of n and the
 * ratio n/phi(n) produces a minimum. */

function prb70(){
  var primes = eratosthenes(10000),
      max = 10000000,
      a = 178,
      b = 178,
      min_r = 2,
      min_n = 2;
  while(primes[a]*primes[b] < max){
    b = b + 1;
    var n = primes[a]*primes[b];
    var c = (primes[a] - 1) * (primes[b] - 1);
    if((primes[a] + primes[b]) % 9 == 1){
      if(ispermutation(n,c)){
        var r = n/c;
        if(r < min_r){
          min_r = r;
          min_n = n;
        }
      }
    }
    if(n>max){
      a = a + 1;
      b = a;
    }
  }
  return min_n;
}
