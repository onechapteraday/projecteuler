var Calculator = function() {}

Calculator.prototype.addition = function(x,y){
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

Calculator.prototype.multiplication = function(x,y){
  if(x.toString()=="0" || y.toString()=="0") return '0';

  var greater = ((x.length > y.length)||(x.length == y.length && x > y))?x:y,
      smaller = ((x.length > y.length)||(x.length == y.length && x > y))?y:x,
      lines = new Array(),
      length = 0,
      sum,
      result = 0,
      retenue = 0,
      final_result = [0];
  
  // Make the multiplication
  for(var i = smaller.length; i > 0; i--){
    sum = [];
    retenue = 0;
    if(i<smaller.length){
      var f = smaller.length - i;
      for(k = 0; k < f; k++)
        sum.unshift(0);
    }
    for(var j = greater.length; j > 0; j-- ){
      result = smaller[i-1]*greater[j-1]+retenue;
      sum.unshift(result%10000000);
      retenue = ~~(result/10000000);
    }
    if(retenue>0) sum.unshift(retenue);
    lines[lines.length] = sum;
  }

  if(lines.length>1){
    for(var i = 0; i < lines.length; i++)
      final_result = this.addition(final_result,lines[i]);
    sum = final_result;
  }
  
  return sum;
}
