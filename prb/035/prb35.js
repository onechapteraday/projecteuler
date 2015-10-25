/* The number, 197, is called a circular prime because all rotations of the digits:
 * 197, 971, 719, are themselves prime.
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73,
 * 79, and 97.
 * How many circular primes are there below one million? */

function prb35(){
  var primes = eratosthenes(1000000),
      temp = [];
  for(var i = 0; i < primes.length; i++){
      var rotations = rotation(primes[i]);
      for(var j = 0; j < rotations.length; j++){
        var found = false;
	if(!isprime(rotations[j])){
	  found = true;
	  break;
	}
      }
      if(!found){
        for(var j = 0; j < rotations.length; j++){
	  temp.push(rotations[j]);
	}
      }
  }
  return temp.unique().length;
}
