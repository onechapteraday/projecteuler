/* In mathematics, binomial coefficients are a family of integers that occurs as
 * coefficients in the binomial theorem. */

function binomial(n,k){
  return factorial(n)/(factorial(k)*factorial(n-k));
}
