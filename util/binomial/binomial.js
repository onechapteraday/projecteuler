/* In mathematics, binomial coefficients are a family of integers that occurs as
 * coefficients in the binomial theorem. */

function binomial(n,k){
  return (k>n)?1:factorial(n)/(factorial(k)*factorial(n-k));
}
