/* In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom
 * right, by moving left, right, up, and down, is indicated in bold red and is
 * equal to 2297.

 *               (131  673  234  103  18 )
 *               (201  96   342  965  150)
 *               (630  803  746  422  111)
 *               (537  699  497  121  956)
 *               (805  732  524  37   331)

 * Find the minimal path sum, in matrix.txt (right click and "Save Link/Target
 * As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the
 * bottom right by moving left, right, up, and down. */

function prb83(input){
  //var grid = input.split('\n').map(x => x.split(','));
  //grid.pop();
  //for(var i=0; i<grid.length; i++){
  //  for(var j=0; j<grid[i].length; j++){
  //    grid[i][j] = parseInt(grid[i][j]);
  //  }
  //}
  var grid = [[131,673,234,103,18],[201,96,342,965,150],[630,803,746,422,111],[537,699,497,121,956],[805,732,524,37,331]];

  // will maybe use a pathfinding algorithm
  // https://en.wikipedia.org/wiki/Pathfinding
  var nbrows = grid.length,
      nbcolumns = grid[0].length,
      cache = [];

  var minpath = function(){
    var cache = new Array();
    for(var i = 0 ; i < 100 ; i++){
      cache[i] = new Array();
    }
    var min = function(x,y){
      var result = cache[x][y];
      if(typeof(result) == "undefined"){
        if(x==0 && y==0) return grid[x][y];
        else{
          if(x==0){
            return cache[x][y] = grid[x][y] + min(x,y-1); /* top side */
          }else if(y==0){
            return cache[x][y] = grid[x][y] + min(x-1,y); /* left side */
          }else{ /* point */
            return cache[x][y] = grid[x][y] + Math.min(min(x,y-1),min(x-1,y));
          }
        }
      }else{
        return result;
      }    
    };
    return min;
  }();

  return true;
}
