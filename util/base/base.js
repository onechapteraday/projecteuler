/* Convert a number from base fb to base tb, assuming arr is an array representing
 * a number in base fb. */

function base(fb,tb,arr) {
  var result = [],
      narr = arr.slice();
  while(narr.length>0){
    var carry=0;
    // Divide by tb (target base)
    for(var i=0;i<narr.length;i++){
      nibble=carry*fb+narr[i];
      narr[i]=~~(nibble/tb);
      carry=nibble%tb;
    }
    // Keep target digits
    result.unshift(carry);
    // Remove leading zeros
    while(narr[0]==0)
      narr.shift();
  }
  return result;
}
