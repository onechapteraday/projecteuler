/* 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 * Find the sum of all numbers which are equal to the sum of the factorial of their
 * digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included. */

function prb34(){
  var result = 0;
  for (var i = 3; i < 50000; i++) {
    var digits = i.toString().split(''),
        sum = 0;
    for (var j = 0; j < digits.length; j++) sum += factorial(digits[j]);
    if (sum == i) result += i;
  }
  return result;
}
