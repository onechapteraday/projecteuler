/* The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143? */

function prb3(){
  var f = factors(600851475143);
  return f[f.length-1];
}
