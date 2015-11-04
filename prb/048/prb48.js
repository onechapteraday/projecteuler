/* The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
 * Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000. */

function prb48(){
  var sum = 0;
  for(var i = 1; i <= 1000; i++){
    sum += modularpow(i,i,10000000000);
    sum %= 10000000000;
  }
  return sum;
}
