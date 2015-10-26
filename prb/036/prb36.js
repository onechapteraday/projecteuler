/* The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
 * Find the sum of all numbers, less than one million, which are palindromic in
 * base 10 and base 2.
 * (Please note that the palindromic number, in either base, may not include
 * leading zeros.) */

function prb36(){
  var sum = 0;
  for(var i = 1; i < 1000000; i+=2){
    if(ispalindrome(i,10)){
      if(ispalindrome(i,2)){
        sum += i;
      }
    }
  }
  return sum;
}
