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
  var grid = [[131, 673, 234, 103,  18],
              [201,  96, 342, 965, 150],
              [630, 803, 746, 422, 111],
              [537, 699, 497, 121, 956],
              [805, 732, 524,  37, 331]];

  var start = [0,0];
  var destinationSquare = [grid[0].length-1, grid.length-1];

  var openList = [];
  var closedList = [];
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

  var movementCost = function(fromCoord, toCoord){
    return Math.abs(toCoord[1] - fromCoord[1]) + Math.abs(toCoord[0] - fromCoord[0])
  }

  var fScore = function(coord){
    return movementCost(start, coord) + movementCost(coord, destinationSquare);
  }

  var destination = false,
      sum = 0;

  // should be an array with the same length of grid
  var previous = [[]];
  for(var i = 0; i < grid.length; i++) {
    previous[i] = [];
  }
  previous[0][0] = 0;

  while(openList.length != 0 && destination == false){
    // get the square with the lowest F;
    var currentSquare,
        min = -1,
	index;

    // check all elements in openList
    for(var i = 0; i < openList.length; i++){
      var value = openList[i];
      if(min == -1){
        min = fScore(value);
        currentSquare = value;
	index = i;
      }

      if(fScore(value) < min){
        min = fScore(value);
        currentSquare = value;
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
        // if the adjacentSquare is already in the closedList
        var found = false;
        for(var i = 0; i < closedList.length; i++){
          if(closedList[i].equals(adjacentSquares[a])){
            found = true;
            break;
          }
        }
	// ... go to next adjacentSquare
        //if(closedList.has(adjacentSquares[a])){ continue; }
        if(found){ continue; }

	// if this adjacentSquare is not in the openList
        //if(!openList.has(adjacentSquares[a]))
        var found = false;
        for(var i = 0; i < openList.length; i++){
          if(openList[i].equals(adjacentSquares[a])){
            found = true;
            break;
          }
        }

        if(!found){
	  // compute its score, set the parent with currentSquare
          console.log('parent of ' + adjacentSquares[a] + ' is ' + currentSquare);
	  // prevent case neighbour does not exist

	  if(typeof grid[adjacentSquares[a][0]] != 'undefined' ){
	    //previous[adjacentSquares[a]] = currentSquare;
	    previous[adjacentSquares[a][0]][adjacentSquares[a][1]] = grid[adjacentSquares[a][0]][adjacentSquares[a][1]] + grid[currentSquare[0]][currentSquare[1]];
	    // and add it to the openList
            openList.push(adjacentSquares[a]);
	  }
        } else {
	  // if is already in openList
          // test if using the current gScore make the aSquare fScore lower,
	  var aSquare_fScore = previous[adjacentSquares[a][0]][adjacentSquares[a][1]] + grid[currentSquare[0]][currentSquare[1]];
	  // The G score is equal to the parent G score + the cost to move from the parent to it
	  //var current_gScore = movementCost(start, previous[adjacentSquares[a]]) + movementCost(previous[adjacentSquares[a]], currentSquare);
	  var current_fScore = grid[adjacentSquares[a][0]][adjacentSquares[a][1]] + grid[currentSquare[0]][currentSquare[1]];
	  //console.log('aSquare_fScore: ' + aSquare_fScore);
	  //console.log('maybe_aSquare_fScore: ' + maybe_aSquare_fScore);

	  if(current_fScore < aSquare_fScore) {
            // if yes update the parent because it means it's a better path!
            console.log('!parent of ' + adjacentSquares[a] + ' is actually ' + currentSquare);
	    previous[adjacentSquares[a][0]][adjacentSquares[a][1]] = current_fScore;
	  }
        }
      }
    }
  }

  console.log(previous);
  return true;
}
