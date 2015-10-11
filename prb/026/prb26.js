/* A unit fraction contains 1 in the numerator. The decimal representation of the
 * unit fractions with denominators 2 to 10 are given:
 * 1/2 = 0.5
 * 1/3 = 0.(3)
 * 1/4 = 0.25
 * 1/5 = 0.2
 * 1/6 = 0.1(6)
 * 1/7 = 0.(142857)
 * 1/8 = 0.125
 * 1/9 = 0.(1)
 * 1/10 = 0.1
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
 * seen that 1/7 has a 6-digit recurring cycle.
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in
 * its decimal fraction part. */

function prb26(){
  var numbers = eratosthenes(1000),
      longest = 0,
      candidate = 0;
  numbers.remove(2);
  numbers.remove(5);
  for(var p = 0; p < numbers.length; p++){
    for(var k = 1; k < 1000; k++){
      if(modularpow(10,k,numbers[p])==1){
        if(longest<k){
          longest = k;
          candidate = numbers[p];
        }
        break;
      }
    }
  }
  return candidate;
}
