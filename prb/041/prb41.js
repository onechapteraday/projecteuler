/* We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once. For example, 41143 is a 4-digit pandigital and is
 * also prime.
 * What is the largest n-digit pandigital prime that exists? */

function prb41(){
  var pandigitals = [1,2,3,4,5,6,7].permutations(7).sort((x,y) => y-x),
      solution = 0;
  for(var i = 0; i < pandigitals.length; i++){
    if(isprime(parseInt(pandigitals[i]))){
      solution = parseInt(pandigitals[i]);
      break;
    }
  }
  return solution;
}
