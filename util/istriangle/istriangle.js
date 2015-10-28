/* Returns if the number is triangular or not. */

function istriangle(n){
  return ((((Math.sqrt(1+8*n))-1)/2)%1==0);
}
