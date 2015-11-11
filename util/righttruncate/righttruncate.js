/* Remove digits of a number n from right to left. */

function right(n){
  var temp = n,
      mod = 1,
      truncatable = [];
  while(~~(n/mod)>0){
    temp = ~~(n/mod);
    truncatable.push(temp);
    mod *= 10;
  }
  return truncatable;
}
