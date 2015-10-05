/* By starting at the top of the triangle below and moving to adjacent numbers on 
 * the row below, the maximum total from top to bottom is 23. 
 * That is, 3 + 7 + 4 + 9 = 23.
 * Find the maximum total from top to bottom of the triangle below: (cf. prb18.txt)*/

function prb18(input){
  var max = 0,
      grid = input.split('\n').map(x => x.split(' '));
  for(var i = 0; i < grid.length-1; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j] = parseInt(grid[i][j]);
    }
  }
  grid.pop();
  for(var i = 0; i < grid.length-1; i++){
    if( maxpath(grid,grid.length-1,i) > max){
      max = maxpath(grid,grid.length-1,i);
    }  
  }
  return max;
}
