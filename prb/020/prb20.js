/* n! means n x (n - 1) x ... x 3 x 2 x 1
 * For example, 10! = 10 x 9 x ... x 3 x 2 x 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * Find the sum of the digits in the number 100! */

function prb20(){
  var sum = 0,
      fact100 = factorialLarge(100),
      digits = (fact100+'').split('');
  for(var i=0; i<digits.length; i++)
    sum += parseInt(digits[i]);
  return sum;
}
