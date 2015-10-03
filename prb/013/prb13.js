/* Work out the first ten digits of the sum of the following one-hundred 
 * 50-digit numbers. */

function prb13(input){
  var result = '0';
  grid = input.split('\n');
  for(var i = 0; i < grid.length; i++)
    result = addition(result,grid[i]);
  return parseInt(result.substring(0,10));
}
