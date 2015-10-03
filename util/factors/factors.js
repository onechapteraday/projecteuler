/* The prime decomposition of a number is defined as a list of prime numbers
 * which when all multiplied together, are equal to that number. */

function factors(n){
  if(!n || n<2)
    return [];
  var f = new Array(),
      r = n;
  while(r%2 === 0){
    r /= 2;
    f.push(2);
  }
  for(var i = 3; r>1 && i <= Math.sqrt(n); i+=2){
    while(r%i === 0){
      f.push(i);
      r /= i;
    }
  }
  if(r!==1) f.push(r);
  return f;
}
