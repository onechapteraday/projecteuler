/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is 
 * the product of all positive integers less than or equal to n.
 * This function now use memoization. */

var factorial = memoizer([1,1], function(shell,n){
  return (n<0)?undefined:n*shell(n-1);
});

function factorialLarge(n){
  var result = new LargeNumber('1');
  for(var i = 1; i<=n; i++)
    result.setArray(multiplication(result.getArray(), new LargeNumber(String(i)).getArray()));
  return result.getValue();
}
