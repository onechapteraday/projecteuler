/* Swap two elements of an array.
 * this[x] = this[y] && this[y] = this[x] */

Array.prototype.swap = function(x, y){
  var temp = this[x];
  this[x] = this[y];
  this[y] = temp;
  return this;
}

/* Sum all elements of an array.
 * Use of reduce with ES6 syntax */

Array.prototype.sum = function(){
  return this.reduce((acc,x) => acc + x);
}

/* Generate all permutations.
 * Use it with n = Array.length */

var perms = [];
Array.prototype.permutations = function(n){
  if(n==1)
    perms.push(this.join(''));
  else{
    for(var i=0; i!=n; i++){
      this.permutations(n-1);
      this.swap(n%2?0:i, n-1);
    }
  }
  return perms;
}
