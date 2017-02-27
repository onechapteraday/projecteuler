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
  var closedList = [];

  // should be an array with the same length of grid
  var previous = [[]];
  for(var i = 0; i < grid.length; i++) {
    previous[i] = [];
  }
  previous[0][0] = start;

  openList.push(start);

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

  var gScore = function(coord){
    if(coord[0] == start[0] && coord[1] == start[1]){
      return grid[coord[0]][coord[1]];
    }

    return grid[coord[0]][coord[1]] + gScore(previous[coord[0]][coord[1]]);
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
        min = gScore(coord);
        currentSquare = coord;
	index = i;
      }

      if(gScore(coord) < min){
        min = gScore(coord);
        currentSquare = coord;
	index = i;
      }
    }

    // add the currentSquare to the closedList
    closedList.push(currentSquare);
    // remove it from the openList
    openList.splice(index,1);

    for(var i = 0; i < closedList.length; i++){
      // if the destinationSquare were added to the closedList, a path is found!
      if(closedList[i].equals(destinationSquare)){
	// and so, we break the loop
	destination = true;
        break;
      }
    }

    // if the destinationSquare is not reach
    if(!destination){
      // retrieve all adjacentSquares
      var adjacentSquares = neighbours(currentSquare);

      for(var a = 0; a < adjacentSquares.length; a++) {
	var adjacentSquare = adjacentSquares[a];

        // if the adjacentSquare is already in the closedList
        var found = false;
        for(var i = 0; i < closedList.length; i++){
          if(closedList[i].equals(adjacentSquare)){
            found = true;
            break;
          }
        }

	// ... go to next adjacentSquare
        //if(closedList.has(adjacentSquare)){ continue; }
        if(found){ continue; }

	// if this adjacentSquare is not in the openList
        //if(!openList.has(adjacentSquare))
        var found = false;
        for(var i = 0; i < openList.length; i++){
          if(openList[i].equals(adjacentSquare)){
            found = true;
            break;
          }
        }

        if(!found){
	  // prevent case neighbour does not exist
	  if(!(typeof grid[adjacentSquare[0]] == 'undefined' ||
	     typeof grid[adjacentSquare[0]][adjacentSquare[1]] == 'undefined')) {
	    previous[adjacentSquare[0]][adjacentSquare[1]] = currentSquare;
	    // and add it to the openList
            openList.push(adjacentSquare);
	  }
        } else {
	  // if is already in openList
          // test if using the current gScore make the aSquare gScore lower
	  var aSquare_gScore = gScore(adjacentSquare);
	  // The G score is equal to the current G score + the cost of the adjacentSquare
	  var current_gScore = gScore(currentSquare) + grid[adjacentSquare[0]][adjacentSquare[1]];

	  if(current_gScore < aSquare_gScore) {
            // if yes update the parent because it means it's a better path!
	    previous[adjacentSquare[0]][adjacentSquare[1]] = currentSquare;
	  }
        }
      }
    }
  }

  return gScore(destinationSquare);
}
