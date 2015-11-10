/* It is possible to show that the square root of two can be expressed as an
 * infinite continued fraction.
 * sqrt(2) = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
 * By expanding this for the first four iterations, we get:
 * 1 + 1/2 = 3/2 = 1.5
 * 1 + 1/(2 + 1/2) = 7/5 = 1.4
 * 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
 * 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...
 * The next three expansions are 99/70, 239/169, and 577/408, but the eighth
 * expansion, 1393/985, is the first example where the number of digits in the
 * numerator exceeds the number of digits in the denominator.
 * In the first one-thousand expansions, how many fractions
 * contain a numerator with more digits than denominator? */

function prb57(){
  var numerator = new LargeNumber([3]),
      denominator = new LargeNumber([2]),
      count = 0;
  for(var i = 2; i < 1000; i++){
    var num = numerator.getArray(),
        den = denominator.getArray();
    numerator.setArray(addition(num, multiplication(new LargeNumber([2]).getArray(),den)));
    denominator.setArray(addition(num, den));
    if(numerator.getValue().length>denominator.getValue().length){
      count++;
    }
  }
  return count;
}
