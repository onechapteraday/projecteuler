/* It is possible to write ten as the sum of primes in exactly five different ways:
 * 7 + 3
 * 5 + 5
 * 5 + 3 + 2
 * 3 + 3 + 2 + 2
 * 2 + 2 + 2 + 2 + 2
 * What is the first value which can be written as the sum of primes in over five
 * thousand different ways? */

function prb77(){
  // sopf stands for Sum Of Prime Factors (sum is made without two same numbers)
  var sopf = function(n){
    var f = factors(n);
    if(f.length == 0) return 0;
    return factors(n).unique().sum();
  }

  // prime partitions formula can be found here: http://programmingpraxis.com/2012/10/19/prime-partitions/
  var primepartitions = function(n){
    var cache = new Array();
    var p = function(n){
      var result;
      if(typeof cache[n] !== 'undefined'){
        result = cache[n];
      } else {
        var temp = 0;
        for(var j=1;j<n;j++){
          temp += sopf(j) * primepartitions(n-j);
        }
        result = 1/n * (sopf(n) + temp);
        cache[n] = result;
      }
      return result;
    }
    return p;
  }();

  for(var i = 2;; i++){
    if(primepartitions(i)>5000){
      soluce = i;
      break;
    }
  }

  return soluce;
}
