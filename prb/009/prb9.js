/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc. */

function prb9(){
  var result = 0;
  for(var a = 3; a < 1000; a++){
    for(var b = a+1; b < 1000; b++){
      c = 1000-a-b;
      if(c*c == a*a + b*b){
        result = a*b*c;
        break;
      }
    }
    if(result>0) break;
  }
  return result;
}
