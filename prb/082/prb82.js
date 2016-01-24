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
  var grid = input.split('\n').map(x => x.split(','));
  grid.pop();
  for(var i=0; i<grid.length; i++){
    for(var j=0; j<grid[i].length; j++){
      grid[i][j] = parseInt(grid[i][j]);
    }
  }
  var given_example =[
    [131, 673, 234, 103, 18 ],
    [201, 96 , 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37 , 331]
  ];
  var minpath = function(){
    var cache = new Array();
    for(var i = 0 ; i < 80 ; i++){
      cache[i] = new Array();
    }
    var min = function(x,y){
      var result = cache[x][y];
      if(typeof(result) == "undefined"){
        if(x==0 && y==0) return given_example[x][y];
        else{
          if(y==4){
            return cache[x][y] = given_example[x][y] + Math.min(min(x,y-1),min(x-1,y)); /* up or left! */
          }else if(x==0){
            return cache[x][y] = given_example[x][y] + Math.min(min(x,y+1),min(x,y-1)); /* down or up */
          }else if(y==0){
            return cache[x][y] = given_example[x][y] + Math.min(min(x,y+1),min(x-1,y)); /* down or left */
          }else{ /* point */
            return cache[x][y] = given_example[x][y] + Math.min(min(x,y-1),min(x-1,y),min(x,y+1)); /* up or left! or down */
          }
        }
      }else{
        return result;
      }    
    };
    return min;
  }();
  console.log(minpath(4,4));
  return true;
}
