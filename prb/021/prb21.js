/* Let d(n) be defined as the sum of proper divisors of n (numbers less than n 
 * which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and 
 * each of a and b are called amicable numbers.
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 
 * and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 
 * 142; so d(284) = 220. 
 * Evaluate the sum of all the amicable numbers under 10000. */

function prb21(){
  var sum = 0;
  for(var i = 220; i < 10000; i++){
    var a = divisors(i),
      inner = a.reduce((acc,x) => acc+x) - i;
    // check w/ sum of proper divisors if its divisors are sum of proper divisors of i 
    if(inner > i){
      var b = divisors(inner),
          total = b.reduce((acc,x) => acc+x) - inner;
      if(total == i)
        sum += i + inner;
    }
  }
  return sum;
}
