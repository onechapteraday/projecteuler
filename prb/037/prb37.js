/* The number 3797 has an interesting property. Being prime itself, it is possible
 * to continuously remove digits from left to right, and remain prime at each
 * stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797,
 * 379, 37, and 3.
 * Find the sum of the only eleven primes that are both truncatable from left to
 * right and right to left.
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes. */

function left(x){
  var digits = x.toString(),
      truncatable = [];
  for(var i = 0; i < digits.length; i++){
    truncatable[i] = parseInt(digits.substring(i,digits.length));
  }
  return truncatable;
}

function right(x){
  var digits = x.toString(),
      length = digits.length,
      truncatable = [];
  while(length>0){
    truncatable.push(parseInt(digits.substring(0,length)));
    length--;
  }
  return truncatable;
}

function prb37(){
  var primes = eratosthenes(999999),
      solution = 0,
      found = 0,
      i = 4;
  while(found<11){
    var values = left(primes[i]).concat(right(primes[i])),
        allprimes = true;
    values.unique();
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
