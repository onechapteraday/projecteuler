/* The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the
 * left column and finishing in any cell in the right column, and only moving up,
 * down, and right, is indicated in red and bold; the sum is equal to 994.

 *               (131  673  234  103  18 )
 *               (201  96   342  965  150)
 *               (630  803  746  422  111)
 *               (537  699  497  121  956)
 *               (805  732  524  37   331)

 * Find the minimal path sum, in matrix.txt (right click and "Save Link/Target
 * As..."), a 31K text file containing a 80 by 80 matrix, from the left column
 * to the right column. */

function prb82(input){
  //var grid = input.split('\n').map(x => x.split(','));
  //grid.pop();
  //for(var i=0; i<grid.length; i++){
  //  for(var j=0; j<grid[i].length; j++){
  //    grid[i][j] = parseInt(grid[i][j]);
  //  }
  //}
  var grid =[
    [131, 673, 234, 103, 18 ],
    [201, 96 , 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37 , 331]
  ];

  // find solutions for any cell in the right column
  var nbrows = grid.length,
      nbcolumns = grid[0].length,
      cache = [];

  // add the right column cell as the start point for all rows
  // this case is a mandatory part of the minimal path
  for(var i = 0; i < nbrows; i++){
    cache[i] = grid[i][nbcolumns-1];
  }

  // then, from the penultimate to the first column
  // we're first trying to go down, then up, and take the minimum result
  for(var i = nbcolumns-2; i >= 0; i--){
    cache[0] += grid[0][i];
    for(var j = 1; j < nbrows; j++){
      cache[j] = Math.min(cache[j], cache[j-1]) + grid[j][i];
    }
    for(var j = nbrows-2; j >= 0; j--){
      cache[j] = Math.min(cache[j], cache[j+1] + grid[j][i]);
    }
  }

  // find minimal path
  var min = cache[0];
  for(var i = 1; i < cache.length; i++){
    if(min>cache[i]){
      min = cache[i];
    }
  }

  console.log(min);
  return true;
}
