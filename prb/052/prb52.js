/* It can be seen that the number, 125874, and its double, 251748, contain exactly
 * the same digits, but in a different order.
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain
 * the same digits. */

function prb52(){
  var solution = 0;
  for(var i = 125874; i < 1000000; i++){
    if(ispermutation(i,i*2)){
      if(ispermutation(i,i*3)){
        if(ispermutation(i,i*4)){
           if(ispermutation(i,i*5)){
             if(ispermutation(i,i*6)){
                solution = i;
                break;
              }
          }
        }
      }
    }
  }
  return solution;
}
