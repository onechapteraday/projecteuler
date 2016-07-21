/* In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom
 * right, by moving left, right, up, and down, is indicated in bold red and is
 * equal to 2297.
 *
 *               (131  673  234  103  18 )
 *               (201  96   342  965  150)
 *               (630  803  746  422  111)
 *               (537  699  497  121  956)
 *               (805  732  524  37   331)
 *
 * Find the minimal path sum, in matrix.txt (right click and "Save Link/Target
 * As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the
 * bottom right by moving left, right, up, and down. */

// introduction to pathfinding: https://www.raywenderlich.com/4946/introduction-to-a-pathfinding
// things about A* algorithm: https://en.wikipedia.org/wiki/A*_search_algorithm

function prb83(input){
  //var grid = input.split('\n').map(x => x.split(','));
  //grid.pop();
  //for(var i=0; i<grid.length; i++){
  //  for(var j=0; j<grid[i].length; j++){
  //    grid[i][j] = parseInt(grid[i][j]);
  //  }
  //}

  // Grid example
  var grid = [[131,673,234,103,18],[201,96,342,965,150],[630,803,746,422,111],[537,699,497,121,956],[805,732,524,37,331]];
  var start = [0,0];
  var destinationSquare = [grid[0].length-1, grid.length-1];

  var openList = new Set();
  var closedList = new Set();
  openList.add(start);

  var neighbours = function([i,j]){
    var matrix = [[-1,0],[0,-1],[1,0],[0,1]];
    var n = [];
    for(var k = 0; k < matrix.length; k++){
      var x = matrix[k][0];
      var y = matrix[k][1];
      if((0 <= i+x) && (0 <= j+y) && (j+y < grid[0].length)){
        n.push([i+x,j+y]);
      }
    }
    return n;
  }

  var movementCost = function(fromCoord, toCoord){
    return Math.abs(toCoord[1] - fromCoord[1]) + Math.abs(toCoord[0] - fromCoord[0])
  }

  var fScore = function(coord){
    return movementCost(start, coord) + movementCost(coord, destinationSquare);
  }

  while(openList.size != 0 && !true){
    // should be the square with the lowest F;
    var currentSquare,
        min = -1;

    for(let [key, value] of openList.entries()){
      console.log(fScore(value));
      currentSquare = value;
      break;
    }

    closedList.add(currentSquare);
    openList.delete(currentSquare);

    if(closedList.has(destinationSquare)){
      break;
    }

    var adjacentSquares = neighbours(currentSquare);

    for(var a = 0; a < adjacentSquares.length; a++) {
      if(closedList.has(adjacentSquares[a])){ continue; }
      if(!openList.has(adjacentSquares[a])){
        openList.add(adjacentSquares[a]);
      }else{
        console.log(adjacentSquares[a]);
      }
    }
  }

  return true;
}
