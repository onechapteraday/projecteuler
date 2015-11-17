/* The cube, 41063625 (345^3), can be permuted to produce two other cubes:
 * 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube
 * which has exactly three permutations of its digits which are also cube.
 * Find the smallest cube for which exactly five permutations of its digits are
 * cube. */

function prb62(){
  var found = 0,
      limit = 8400,
      cubes = [],
      sums = [];
  for(var i = 0; i < limit; i++){
    cubes[i] = [(i*i*i).toString().split('').sort((x,y)=>x-y).join(''),i];
  }
  cubes.sort((x,y)=>x[0]-y[0]);
  for(var i = 0; i < cubes.length-5; i++){
    if(cubes[i][0] == cubes[i+1][0]){
      if(cubes[i+1][0] == cubes[i+2][0]){
        if(cubes[i+2][0] == cubes[i+3][0]){
          if(cubes[i+3][0] == cubes[i+4][0]){
            found = cubes[i][1]*cubes[i][1]*cubes[i][1];
          }
        }
      }
    }
    if(found!=0) break;
  }
  return found;
}
