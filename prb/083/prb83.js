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

function prb83(grid){
  var start = [0,0];
  var destinationSquare = [grid[0].length-1, grid.length-1];
  var destination = false;

  var openList = [];
  openList.push(start);

  // should be arrays with the same length of grid
  var previous = [[]];
  var visited = [[]];

  for(var i = 0; i < grid.length; i++) {
    previous[i] = [];
    visited[i] = [];

    for(var j = 0; j < grid.length; j++) {
      visited[i][j] = false;
    }
  }

  previous[0][0] = grid[start[0]][start[1]];

  // find the neighbours of [i,j]
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

  // calculate gScore with currentSquare and adjacentSquar
  var gScore = function(cur, adj){
    return previous[cur[0]][cur[1]] + grid[adj[0]][adj[1]];
  }

  while(openList.length != 0 && destination == false){
    // get the square with the lowest F;
    var currentSquare,
        min = -1,
        index;

    // check all elements in openList
    for(var i = 0; i < openList.length; i++){
      var coord = openList[i];
      if(min == -1){
        min = previous[coord[0]][coord[1]];
        currentSquare = coord;
	index = i;
      }

      if(previous[coord[0]][coord[1]] < min){
        min = previous[coord[0]][coord[1]];
        currentSquare = coord;
	index = i;
      }
    }

    // mark currentSquare as visited
    visited[currentSquare[0]][currentSquare[1]] = true;
    // remove it from the openList
    openList.splice(index,1);

    // if currentSquare equals destinationSquare
    if(currentSquare[0] == destinationSquare[0] &&
       currentSquare[1] == destinationSquare[1]){
      // and so, we break the loop
      destination = true;
      break;
    }

    // if the destinationSquare is not reach
    if(!destination){
      // retrieve all adjacentSquares
      var adjacentSquares = neighbours(currentSquare);

      for(var a = 0; a < adjacentSquares.length; a++) {
	var adjacentSquare = adjacentSquares[a];

        // if the adjacentSquare is already visited
        var found = false;
	if(!(typeof grid[adjacentSquare[0]] == 'undefined' ||
	   typeof grid[adjacentSquare[0]][adjacentSquare[1]] == 'undefined')) {
	  if(visited[adjacentSquare[0]][adjacentSquare[1]] == true){
	    found = true;
	  }
	}

	// ... go to next adjacentSquare
        if(found){ continue; }

	// if this adjacentSquare is not in the openList
        var found = false;
        for(var i = 0; i < openList.length; i++){
          if(openList[i][0] == adjacentSquare[0] &&
	     openList[i][1] == adjacentSquare[1]){
            found = true;
            break;
          }
        }

        if(!found){
	  // prevent case neighbour does not exist
	  if(!(typeof grid[adjacentSquare[0]] == 'undefined' ||
	     typeof grid[adjacentSquare[0]][adjacentSquare[1]] == 'undefined')) {
	    previous[adjacentSquare[0]][adjacentSquare[1]] = gScore(currentSquare, adjacentSquare);
	    // and add it to the openList
            openList.push(adjacentSquare);
	  }
        }
      }
    }
  }

  return previous[destinationSquare[0]][destinationSquare[1]];
}
