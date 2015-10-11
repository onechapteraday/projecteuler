/* Swap two elements of an array. */

Array.prototype.swap = function(x, y){
  var temp = this[x];
  this[x] = this[y];
  this[y] = temp;
  return this;
}

/* Sum all elements of an array. */

Array.prototype.sum = function(){
  return this.reduce((acc,x) => acc + x);
}
