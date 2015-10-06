/* These functions are created because native JavaScript don't allow big Integer 
 * operations. These is an implementation of the multiplication. */

function multiply(x,y){
     return parseInt(x) * parseInt(y);
}
function multiplication(x,y){
  var xdigits = (""+x).split(""),
      ydigits = (""+y).split(""),
      greater = new Array(),
      smaller = new Array(),
      lines = new Array(),
      xlength = xdigits.length,
      ylength = ydigits.length,
      length = 0,
      sum = "",
      result = 0,
      retenue = 0;
  // Who's the greater number ?
  if( (xlength>ylength) || (xlength==ylength && x > y)){
    greater = xdigits;
    greater_length = xlength;
    smaller = ydigits;
    smaller_length = ylength;
  }else{
    greater = ydigits;
    greater_length = ylength;
    smaller = xdigits;
    smaller_length = xlength;
  }
  // Make the multiplication
  for(var i = smaller_length; i > 0; i--){
    sum = "";
    retenue = 0;
    if(i<smaller_length){
      var f = smaller_length - i;
      for(k = 0; k < f; k++){
        sum = "0".toString().concat(sum);
      }
    }
    for(var j = greater_length; j > 0; j-- ){
      result = addition(multiply(smaller[i-1],greater[j-1]),retenue);
      if(result.toString().length>1){
        digits = (""+result.toString()).split("");
        sum = digits[1].toString().concat(sum);
        retenue = digits[0];
      }else{
        sum = result.toString().concat(sum);
        retenue = 0;
      }
    }
    if(retenue>0) sum = retenue.toString().concat(sum);
    lines[lines.length] = sum;
  }
  var lines_length = lines.length,
      final_result = 0;
  if(lines_length>1){
    for(var i = 0; i < lines_length; i++){
      final_result = addition(final_result,lines[i]);
    }
    sum = final_result;
  }
  // Display sum
  var regex = /^0+$/g;
  if(sum.match(regex)) return '0';
  else return sum;
}
