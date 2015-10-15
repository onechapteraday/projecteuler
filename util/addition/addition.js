/* These functions are created because native JavaScript don't allow big Integer 
 * operations. These is an implementation of the addition. */

function addition(x,y){
  var xlength = x.length,
      ylength = y.length,
      length = (xlength>ylength)?xlength:ylength,
      sum = [],
      result = 0,
      retenue = 0;

  for(var i = length; i > 0; i--){
    xlength -= 1;
    ylength -= 1;
    // Make correct addition
    if(xlength>=0 && ylength>=0) result = x[xlength]+y[ylength]+retenue;
    else if(xlength < 0) result = y[ylength]+retenue;
    else result = x[xlength]+retenue;
    // Split result to contain retenue
    sum.unshift(result%10000000);
    retenue = ~~(result/10000000);
  }

  if(retenue>0) sum.unshift(retenue);
  return sum;
}