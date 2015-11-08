/* A palindrome can be read from left to right and from right to left.
 * I figure if the reverse number of a number is equal to the number, this
 * number is a palindrome. */

function ispalindrome(x,base){
  if(arguments.length==1)
    base = 10;
  return (x==reverse(x,base));
}
