/* Remove digits of a number n from right to left. */

function right(n){
  var digits = n.toString(),
      length = digits.length,
      truncatable = [];
  while(length>0){
    truncatable.push(parseInt(digits.substring(0,length)));
    length--;
  }
  return truncatable;
}
