/* The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit
 * number, 134217728=89, is a ninth power.
 * How many n-digit positive integers exist which are also an nth power? */

function prb63(){
  var solution = 0;
  for(var x = 1; x < 10; x++){
    for(var y = 1; y < 25; y++){
      if(Math.pow(x,y).toString().length == y)
        solution++;
    }
  }
  return solution;
}
