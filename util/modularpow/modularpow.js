/* Modular exponentiation is a type of exponentiation performed over a modulus.
 * It is useful in computer science, especially in the field of public-key 
 * cryptography. */

function modularpow(base, exponent, modulus){
  var result = 1;
  base = base % modulus;
  while(exponent > 0){
    if(exponent%2==1)
      result = (result*base)%modulus;
    exponent = exponent >> 1;
    base = (base*base)%modulus;
  }
  return result;
}
