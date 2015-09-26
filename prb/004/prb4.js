/* A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 x 99.
 * Find the largest palindrome made from the product of two 3-digit numbers. */

function prb4(){
  var result = 0;
  for(var i = 100; i < 1000; i++){
    for(var j = i; j < 1000; j++){
      if(result<i*j){
        if(ispalindrome(i*j)) result = i*j;
      }
    }
  }
  return result;
}
