/* In number theory, Euler's totient function (or Euler's phi function) is an
 * arithmetic function that counts the positive integers less than or equal to n
 * that are relatively prime to n. */

function phi(n){
  var result = n;
  for(var p = 2; p*p <=n; p++){
    if(n%p==0){
      while(n%p==0)
        n /= p;
      result *= 1 - 1/p;
    }
  }
  if(n > 1)
    result *= 1 - 1/n;
  return Math.floor(result);    
} 
