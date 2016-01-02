/* It is possible to write five as a sum in exactly six different ways:
 * 4 + 1
 * 3 + 2
 * 3 + 1 + 1
 * 2 + 2 + 1
 * 2 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 + 1
 * How many different ways can one hundred be written as a sum of at least two
 * positive integers? */

function prb76(){
  var partition = function(){
    var temp = new Array();
    var p = function(k,n){
      var result;
      if(k>n) result = 0;
      else if(k==n) result = 1;
      else {
        if(!Array.isArray(temp[k])) {
          temp[k] = new Array();
        }
        if(typeof temp[k][n] !== "number"){
          temp[k][n] = p(k+1,n) + p(k,n-k);
        }
        result = temp[k][n];
      }
      return result;
    };
    return p;
  }();
  return partition(1,100)-1;
}
