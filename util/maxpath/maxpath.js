function path(g){
  var m = 0;
  var maxpath = function(){
    var cache = new Array();
    for(var i = 0 ; i < g.length ; i++){
      cache[i] = new Array();
    }
    var max = function(x,y){
      var result = cache[x][y];
      if(typeof(result) == "undefined"){
        if(x==0 && y==0) return g[x][y];
        else{
          if(typeof(g[x-1][y])=="undefined"){
            return cache[x][y] = g[x][y] + max(x-1,y-1); /* right side */
          }else if(typeof(g[x-1][y-1])=="undefined"){
            return cache[x][y] = g[x][y] + max(x-1,y); /* left side */
          }else{ /* middle */
            return cache[x][y] = g[x][y] + Math.max(max(x-1,y-1),max(x-1,y));
          }
        }
      }else{
        return result;
      }    
    };
    return max;
  }();

  for(var i = 0; i < g.length-1; i++){
    if( maxpath(g.length-1,i) > m){
      m = maxpath(g.length-1,i);
    }
  }
  return m;
}

