/* The first two consecutive numbers to have two distinct prime factors are:
 * 14 = 2 x 7
 * 15 = 3 x 5
 * The first three consecutive numbers to have three distinct prime factors are:
 * 644 = 2? x 7 x 23
 * 645 = 3 x 5 x 43
 * 646 = 2 x 17 x 19.
 * Find the first four consecutive integers to have four distinct prime factors.
 * What is the first of these numbers? */

function prb47(){
  var solution = 0;
  for(var i = 647; i < 999999; i++){
    var found = false;
    if(factors(i).unique().length==4){
      if(factors(i+1).unique().length==4){
        if(factors(i+2).unique().length==4){
          if(factors(i+3).unique().length==4){
            found = true;
            solution = i;
            break;
          }
        }
      }
    }
  }
  return solution;
}
