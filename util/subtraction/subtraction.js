/* Propose an implementation of subtraction with String since JavaScript do not
 * allow big integers. */

function subtraction(x,y){
  var subtract = ((x,y) => x - y);
  var add = ((x,y) => x + y);

  var xlength = x.length,
      ylength = y.length,
      length = ylength,
      result = '',
      retenue = 0;

  if(ylength>xlength || (xlength==ylength && y>x)){
    return '';
  }

  for(var i = length-1; i>=0; i--){
    xlength -= 1;
    ylength -= 1;
    var temp = subtract(x[xlength],y[ylength]);
    if(Math.sign(temp)>-1){
      result = temp+result;
    }else{
      temp = subtract('1'+x[xlength],y[ylength]);
      if(ylength-1 != -1){
        if(y[ylength-1]=='9'){
          if(ylength-2 == -1){
            y = y.substr(0,ylength-1) + '10' + y.substr(ylength);
            ylength += 1;
            i++;
          }else{
	    var toadd = ''+add(parseInt(y[ylength-2]),1);
            y = y.substr(0,ylength-2) + toadd.substr(this.length-1) + '0' + y.substr(ylength);
	    if(toadd.length>1){
              if(y[ylength-3]=='9'){
                if(ylength-4 == -1){
                  y = y.substr(0,ylength-3) + '10' + y.substr(ylength-2);
                  ylength += 1;
                  i++;
                }
	      } else {
	        retenue = 1;
              }
	    } 
          }
        }else{ 
          y = y.substr(0,ylength-1) + add(parseInt(y[ylength-1]),1) + y.substr(ylength);
        }
      }else{
        y = '1'+y;
	ylength += 1;
	i++;
      }
      result = temp+result;
    }
  }

  for(var i = xlength-1; i>=0; i--){
    if(retenue == 1){
      x = x.substr(0,i) + subtract(parseInt(x[i]),1) + x.substr(i+1);
      retenue = 0;
      i++;
    }else{
      result = x[i]+result;
    }
  }

  while(result.match(/^0/) && result!='0'){
    result = result.substr(1);
  }

  return result;  
}
