/* If I have a number 173, I want the reversed 371.
 * ~~(x) is used insted of Math.floor() as a most efficient function. */

function reverse(x,base){
  if(arguments.length==1)
    base = 10;
  var p = 0;
  while(x>0){
    p = p*base + x%base;
    if(x<2147483648) x = ~~(x/base);
    else x = Math.floor(x/base);
  }
  return p;
}
