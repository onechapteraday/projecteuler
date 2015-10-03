/* In mathematics, the greatest common divisor (gcd) of two or more integers is 
 * the largest positive integer that divides the numbers without a remainder. */

function gcd(a,b){
  var temp = 0;
  while(b!=0){
    temp = a%b;
    a = b;
    b = temp;
  }
  return a;
}
