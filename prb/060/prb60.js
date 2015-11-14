/* The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes
 * and concatenating them in any order the result will always be prime. For example,
 * taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes,
 * 792, represents the lowest sum for a set of four primes with this property.
 * Find the lowest sum for a set of five primes for which any two primes concatenate
 * to produce another prime. */

function prb60(){
  var primes = eratosthenes(1000);
  var i = 1;
  var temp = [];
  for(var j = i; j < primes.length; j++){
    if(isprime(parseInt(''+primes[i]+primes[j]))
       && isprime(parseInt(''+primes[j]+primes[i])))
      temp.push(primes[j]);
  }
  var i = 3;
  var temp2 = [];
  for(var j = i; j < primes.length; j++){
    if(isprime(parseInt(''+primes[i]+primes[j]))
       && isprime(parseInt(''+primes[j]+primes[i])))
      temp2.push(primes[j]);
  }
  var i = 28;
  var temp3 = [];
  for(var j = i; j < primes.length; j++){
    if(isprime(parseInt(''+primes[i]+primes[j]))
       && isprime(parseInt(''+primes[j]+primes[i])))
      temp3.push(primes[j]);
  }
  var t = [];
  for(var i = 0; i < temp.length; i++){
    if(binarysearch(temp2,temp[i])>-1){
      t.push(temp[i]);
    }
  }
  var t2 = [];
  for(var i = 0; i < t.length; i++){
    if(binarysearch(t,temp3[i])>-1){
      t2.push(temp3[i]);
    }
  }
  console.log(t2);
  return true;
}
