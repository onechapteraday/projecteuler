/* The prime decomposition of a number is defined as a list of prime numbers
 * which when all multiplied together, are equal to that number. */

function factors(n){
  if(!n || n<2)
    return [];
  var f = new Array(),
      r = n;
  for(var i = 2; i <= Math.sqrt(n); i++){
    while(r%i === 0){
      f.push(i);
      r /= i;
    }
    if(r==1) break;
  }
  if(r!=1) f.push(r);
  return f;
}
