/* This algorithm calculate the number of ways to make the maximum value with
 * values defined in the given array.
 * We can count how many ways are there to make the change for money. */

function howmanyways(array, max){
  var cache = [];
  var run = function(x, start){
    if(x==max) return 1;
    else if(x>max) return 0;
    else{
      if(typeof(cache[x])=='undefined')
        cache[x] = [];
      
      if(typeof(cache[x][start])!='undefined')
        return cache[x][start];

      var ways = 0;
      for(var i=start; i<array.length; i++)
        ways += run(x+array[i],i);
      cache[x][start] = ways;
      return ways;
    }
  }
  return run(0,0);
}
