/* We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through
 * 5 pandigital.
 * The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing
 * multiplicand, multiplier, and product is 1 through 9 pandigital.
 * Find the sum of all products whose multiplicand/multiplier/product identity can
 * be written as a 1 through 9 pandigital.
 * HINT: Some products can be obtained in more than one way so be sure to only
 * include it once in your sum. */

function prb32(){
  var products = [];
  for(var a = 2; a < 9999; a++){
    for(var b = a+1; b < 9999; b++){
      var product = a*b,
          concat = ''+a+b+product;
      if(concat.length>9) break;
      else if(concat.length<9) continue;
      else{
        if(ispandigital(concat))
          products[products.length] = product;
      }
    }
  }
  products.unique();
  return products.sum();
}
