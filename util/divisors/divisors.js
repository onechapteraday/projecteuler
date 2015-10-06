/* In mathematics, a divisor of an integer n, also called a factor of n, is an 
 * integer that can be multiplied by sime integer to produce n. */

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
