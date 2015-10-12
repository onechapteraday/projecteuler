/* In number theory, a formula for primes is a formula generating the prime
 * numbers, exactly and without exception. No such formula which is efficiently
 * computable is known. A number of constraints are known, showing what such a
 * "formula" can and cannot be. */

function eulerquadratic(n,a,b){
  return Math.pow(n,2) + a*n + b;
}
