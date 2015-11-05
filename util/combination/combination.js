/* In mathematics, a combination is a way of selecting items from a collection, such
 * that the order of selection does not matter. In smaller cases it is possible to
 * count the number of combinations. */

function combination(n,r){
  return factorial(n)/(factorial(r)*factorial(n-r));
}
