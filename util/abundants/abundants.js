/* In number theory, an abundant number or excessive number is a number for which 
 * the sum of its proper divisors is greater than the number itself. */

function abundants(n){
  var a = [];
  for(var i=1; i<n; i++){
    if((divisors(i).reduce((acc,x) => acc+x)-i) > i)
      a.push(i);
  }
  return a;
}
