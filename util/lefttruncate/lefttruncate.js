/* Remove digits of a number n from left to right. */

function left(n){
  var temp = 0,
      mod = 10,
      truncatable = [];
  while(temp<n){
    temp = n%mod;
    truncatable.push(temp);
    mod *= 10;
  }
  return truncatable;
}
