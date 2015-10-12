/* A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself. A natural number greater than 1 that is not a prime
 * number is called a composite number. */

function isprime(n) {
  if(n<=3) return n>1;
  if(n%2==0 || n%3==0) return false;
  for(var i=5; i*i<=n; i+=6) {
    if(n%i==0 || n%(i+2)==0) return false;
  }
  return true;
}
