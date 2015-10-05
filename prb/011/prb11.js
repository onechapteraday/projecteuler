/* In the 20x20 grid below, four numbers along a diagonal line have been marked in
 * red. (cf. prb11.txt)
 * The product of these numbers is 26 x 63 x 78 x 14 = 1788696. 
 * What is the greatest product of four adjacent numbers in the same direction 
 * (up, down, left, right, or diagonally) in the 20x20 grid? */

function prb11(input){
  var grid = new Array(),
      rows = 0,
      columns = 0,
      product = 0,
      innerproduct = 0;

  grid = input.split('\n').map(x => x.split(' '));
  rows = grid.length;
  columns = grid[0].length;

  // horizontal
  for(var j = 0; j < rows; j++){
    for(var k = 0; k < columns-4; k++){
      innerproduct = grid[j][k]*grid[j][k+1]*grid[j][k+2]*grid[j][k+3];
      if(innerproduct>product) product = innerproduct;
      innerproduct = 0;
    }
  }

  // vertical
  for(var j = 0; j < rows-4; j++){
    for(var k = 0; k < columns; k++){
      innerproduct = grid[j][k]*grid[j+1][k]*grid[j+2][k]*grid[j+3][k];
      if(innerproduct>product) product = innerproduct;
      innerproduct = 0;
    }
  }

  // diagonal left
  for(var j = 0; j < rows-4; j++){
    for(var k = 4; k < columns; k++){
      innerproduct = grid[j][k]*grid[j+1][k-1]*grid[j+2][k-2]*grid[j+3][k-3];
      if(innerproduct>product) product = innerproduct;
      innerproduct = 0;
    }
  }

  // diagonal right
  for(var j = 0; j < rows-4; j++){
    for(var k = 0; k < columns-4; k++){
      innerproduct = grid[j][k]*grid[j+1][k+1]*grid[j+2][k+2]*grid[j+3][k+3];
      if(innerproduct>product) product = innerproduct;
      innerproduct = 0;
    }
  }

  return product;
}
