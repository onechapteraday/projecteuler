/* A palindrome can be read from left to right and from right to left.
 * I figure if the reverse number of a number is equal to the number, this
 * number is a palindrome. */

function ispalindrome(x){
  return (x==reverse(x));
}
