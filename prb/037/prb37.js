/* The number 3797 has an interesting property. Being prime itself, it is possible
 * to continuously remove digits from left to right, and remain prime at each
 * stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797,
 * 379, 37, and 3.
 * Find the sum of the only eleven primes that are both truncatable from left to
 * right and right to left.
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes. */

function prb37(){
  var primes = eratosthenes(739400),
      solution = 0,
      found = 0,
      i = 8;
  while(found<11){
    var values = left(primes[i]),
        b = right(primes[i]),
        allprimes = true;
    for(var j = 0; j < b.length; j++){
      values.push(b[j]);
    }
    for(var j = 0; j < values.length; j++){
      if(!isprime(values[j])){
        allprimes = false;
        break;
      }
    }
    if(allprimes){
      solution += primes[i];
      found++;
    }
    i++;
  }
  return solution;
}
