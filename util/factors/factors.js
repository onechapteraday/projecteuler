/* The prime decomposition of a number is defined as a list of prime numbers
 * which when all multiplied together, are equal to that number. */

function factors(n){
  if(!n || n<2)
    return [];
  var f = new Array();
  for(var i = 2; i <=n; i++){
    while(n%i === 0){
      f.push(i);
      n /= i;
    }
  }
  return f;
}
