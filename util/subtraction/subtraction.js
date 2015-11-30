/* Propose an implementation of subtraction with LargeNumber since JavaScript do not
 * allow big integers. */

function subtraction(x,y){
  var xlength = x.length,
      ylength = y.length,
      difference = [],
      result = 0,
      retenue = 0;

  if (xlength < ylength){
    return undefined;
  }

  if(xlength == ylength){
    for(var i = 0; i < xlength; i++){
      if(x[i] < y[i]){
        return undefined;
      }
      if(x[i] == y[i]){
        continue;
      }
      if(x[i] > y[i]){
        break;
      }
    }
  }

  for (var i = xlength; i > 0; i--){
    xlength--;
    ylength--;
    if(xlength>=0 && ylength>=0) result = x[xlength]-(y[ylength]+retenue);
    else result = x[xlength]-retenue;
    if (result < 0){
      retenue = 1;
      result += 10000000;
    }else
      retenue = 0;
    difference.unshift(result);
  }

  while(difference[0]==0 && difference.length>1) difference.shift();
  return difference;
}
