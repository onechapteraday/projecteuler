/* The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases
 * by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii)
 * each of the 4-digit numbers are permutations of one another.
 * There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
 * exhibiting this property, but there is one other 4-digit increasing sequence.
 * What 12-digit number do you form by concatenating the three terms in this sequence? */

function prb49(){
  var primes = eratosthenes(9999),
      solution = '';
  for(var i = 0; i < primes.length; i++){
    if(primes[i]<1488) continue;
    else{
      if(binarysearch(primes,primes[i]+3330)>-1){
        if(binarysearch(primes,primes[i]+6660)>-1){
          if(ispermutation(primes[i],primes[i]+3330)){
            if(ispermutation(primes[i],primes[i]+6660)){
              solution = solution.concat(primes[i]+''+(primes[i]+3330)+''+(primes[i]+6660));
            }
          }
        }
      }
    }
  }
  return parseInt(solution);
}
