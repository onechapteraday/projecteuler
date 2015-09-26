/* If I have a number 173, I want the reversed 371.
 * ~~(x) is used insted of Math.floor() as a most efficient function. */

function reverse(x){
  var p = 0;
  while(x>0){
    p = p*10 + x%10;
    x = ~~(x/10);
  }
  return p;
}
