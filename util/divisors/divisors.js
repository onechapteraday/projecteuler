/* We can find the number of divisors of a number through its prime factorization.
 * 20 = 2*2*5 = 2^2 + 5^1 so it has 3*2 divisors => 6 divisors.
 * 27951 = 3*7*11*11*11 = 3^1 + 7^1 + 11^3 so it has 2*2*4 divisors => 16 divisors. */

function divisors(n){
  var f = factors(n),
      sum = 1,
      product = 1;
  for(var i = 0; i < f.length-1; i++){
    if(f[i]==f[i+1])
      sum += 1;
    else {
      product *= sum + 1;
      sum = 1;
    }
  }
  product *= sum + 1;
  return product;
}
