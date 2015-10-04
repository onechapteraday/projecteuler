/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is 
 * the product of all positive integers less than or equal to n.
 * This function now use memoization. */

var factorial = memoizer([1,1], function(shell,n){
  return (n<0)?undefined:n*shell(n-1);
});
