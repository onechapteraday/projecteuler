/* Modular exponentiation is a type of exponentiation performed over a modulus.
 * It is useful in computer science, especially in the field of public-key 
 * cryptography. */

function modularpow(base, exponent, modulus){
  if(exponent==0)
    return 1;

  else {
    var n = 100000,
        x = modularpow(base,exponent>>1,modulus),
        xdivn = ~~(x/n),
        xmodn = x%n,
        x2 = (n*n%modulus*(xdivn*xdivn%modulus)+2*n*xdivn*xmodn+xmodn*xmodn)%modulus;

    if(exponent&1)
      return base*x2%modulus;

    else
      return x2;
  }
}
