/* Remove digits of a number n from left to right. */

function left(n){
  var digits = n.toString(),
      truncatable = [];
  for(var i = 0; i < digits.length; i++){
    truncatable[i] = parseInt(digits.substring(i,digits.length));
  }
  return truncatable;
}
