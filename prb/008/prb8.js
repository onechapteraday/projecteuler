/* The four adjacent digits in the 1000-digit number that have the greatest product
 * are 9 x 9 x 8 x 9 = 5832. (cf. prb8.txt)
 * Find the thirteen adjacent digits in the 1000-digit number that have the 
 * greatest product. What is the value of this product? */

function prb8(input){
  var product = 0,
      innerproduct = 1,
      adjacent = 13,
      grid = new Array();

  input = input.replace(/[\n\r]+/g, '');
  grid = input.split('');
  for(var j = 0; j < 1000-adjacent; j++){
    for(var k = 0; k < adjacent; k++)
      innerproduct *= parseInt(grid[j+k]);
    if(innerproduct > product) product = innerproduct;
    innerproduct = 1;
  }

  return product;
}
