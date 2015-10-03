/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is 
 * the product of all positive integers less than or equal to n. */

function factorial(n){
  return (n<0)?undefined:(n==0 || n==1)?1:n*factorial(n-1);
}
