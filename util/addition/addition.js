/* These functions are created because native JavaScript don't allow big Integer 
 * operations. These is an implementation of the addition. */

function add(x,y){
  return parseInt(x) + parseInt(y);
}
function addition(x,y){
  var xdigits = (""+x).split(""),
      ydigits = (""+y).split(""),
      xlength = xdigits.length,
      ylength = ydigits.length,
      length = 0,
      sum = "",
      result = 0,
      retenue = 0;
  // How many times to loop
  if(xlength>ylength) length = xlength;
  else length = ylength;
  // Loop to make the addition
  for(var i = length; i > 0; i--){
    // Decrement length values
    xlength = xlength - 1;
    ylength = ylength - 1;
    // Make correct addition
    if(xlength>=0 && ylength>=0) result = add(add(xdigits[xlength],retenue),ydigits[ylength]);
    else if(xlength < 0) result = add(add(0,retenue),ydigits[ylength]);
    else result = add(add(xdigits[xlength],retenue),0);
    // Split result to contain retenue
    if(result.toString().length>1){
      digits = (""+result.toString()).split("");
      sum = digits[1].concat(sum);
      retenue = digits[0];
    }else{
      sum = result.toString().concat(sum);
      retenue = 0;
    }
  }
  if(retenue>0) sum = retenue.toString().concat(sum);
  return sum; 
}
