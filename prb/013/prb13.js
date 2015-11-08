/* Work out the first ten digits of the sum of the following one-hundred 
 * 50-digit numbers. */

function prb13(input){
  var result = new LargeNumber([0]);
  grid = input.split('\n');
  for(var i = 0; i < grid.length; i++)
    result.setArray( addition(result.getArray(), new LargeNumber(grid[i]).getArray()) );
  return parseInt(result.getValue().substring(0,10));
}
