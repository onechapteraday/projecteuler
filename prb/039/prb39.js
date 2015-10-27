/* If p is the perimeter of a right angle triangle with integral length sides,
 * {a,b,c}, there are exactly three solutions for p = 120.
 * {20,48,52}, {24,45,51}, {30,40,50}
 * For which value of p <= 1000, is the number of solutions maximised? */

function prb39(){
  var max = 0,
      solution = 0;
  for(var i = 12; i < 1001; i++){
    var temp = righttriangle(i);
    if(temp>max){
      max = temp;
      solution = i;
    }
  }
  return solution;
}
