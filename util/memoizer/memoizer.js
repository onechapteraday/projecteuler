/* Functions can use objects to remember the results of previous operations, 
 * making it possible to avoid unnecessary work. This optimization is called 
 * memoization. */

var memoizer = function (memo, fundamental) {
  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};
