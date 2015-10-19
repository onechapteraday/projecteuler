/* In mathematics, a divisor of an integer n, also called a factor of n, is an 
 * integer that can be multiplied by some integer to produce n. */

function divisors(n){
  var d = [];
  for(var i = 0; i <= Math.sqrt(n); i++){
    if(n%i==0){ 
      d.push(i);
      if(i*i!=n) d.push(n/i);
    }
  }
  return d.sort((x,y) => x-y);
}

function sumdivisors(n){
  var sum = 0;
  for(var i = 0; i <= Math.sqrt(n); i++){
    if(n%i==0){
      sum += i;
      if(i*i!=n) sum += n/i;
    }
  }
  return sum;
}
