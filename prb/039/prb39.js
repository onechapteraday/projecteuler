/* If p is the perimeter of a right angle triangle with integral length sides,
 * {a,b,c}, there are exactly three solutions for p = 120.
 * {20,48,52}, {24,45,51}, {30,40,50}
 * For which value of p <= 1000, is the number of solutions maximised? */

function prb39(){
  var max = 0,
      solution = 0;
  // if a and b are even, so is c => p is even
  // if a or b (not both) is odd, then c is odd => p is even
  // if a and b are odd, c is even => p is even
  for(var p = 120; p <= 1000; p+=2){
    var temp = righttriangle(p);
    if(temp>max){
      max = temp;
      solution = p;
    }
  }
  return solution;
}
