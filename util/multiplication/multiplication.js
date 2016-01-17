/* These functions are created because native JavaScript don't allow big Integer 
 * operations. These is an implementation of the multiplication. */

function multiplication(x,y){
  var greater = ((x.length > y.length)||(x.length == y.length && x > y))?x:y,
      smaller = ((x.length > y.length)||(x.length == y.length && x > y))?y:x,
      lines = new Array(),
      length = 0,
      sum,
      result = 0,
      retenue = 0,
      final_result = [0];
  
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

function pow(n,x){
  var m = 0,
      s = new LargeNumber([1]);
  while(m < x){
    s.setArray( multiplication(s.getArray(),[n]));
    m++;
  }
  return s.getArray();
}
