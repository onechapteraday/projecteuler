/* There are exactly ten ways of selecting three from five, 12345:
 * 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
 * In combinatorics, we use the notation, 5C3 = 10.
 * In general,
 * nCr =	
 * n!
 * r!(n-r)!
 * ,where r <= n, n! = nx(n-1)x...x3x2x1, and 0! = 1.
 * It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.
 * How many, not necessarily distinct, values of  nCr, for 1 <= n <= 100, are
 * greater than one-million? */

function prb53(){
  var solution = 0;
  for(var n = 23; n <= 100; n++){
    for(var r = n; r > 0; r--){
      if(combination(n,r)>1000000){
        solution += 1;
      }
    }
  }
  return solution;
}
