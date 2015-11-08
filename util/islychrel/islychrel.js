/*  A number that never forms a palindrome through the reverse and add process is
 * called a Lychrel number. */

function islychrel(x){
  var lychrel = true;
  for(var i = 0; i < 49; i++){
    x += reverse(x);
    if(ispalindrome(x)){
      lychrel = false;
      break;
    }
  }
  return lychrel;
}
