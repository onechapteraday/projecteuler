var Calculator = function() {}

Calculator.prototype.translate = function(s){
  return s.split(/(?=(?:.......)*$)/).map(x => parseInt(x));
}

Calculator.prototype.gimme = function(n){
  return n.shift() + n.map(function(x){return("0000000"+x).slice(-7)}).toString().replace(/,/g,"");
}

Calculator.prototype.addition = function(x,y){
  var xdigits = (typeof(x)=="string")?this.translate(x):x,
      ydigits = (typeof(y)=="string")?this.translate(y):y,
      xlength = xdigits.length,
      ylength = ydigits.length,
      length = 0,
      sum = [],
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
    if(xlength>=0 && ylength>=0) result = xdigits[xlength]+ydigits[ylength]+retenue;
    else if(xlength < 0) result = ydigits[ylength]+retenue;
    else result = xdigits[xlength]+retenue;
    // Split result to contain retenue
    sum.unshift(result%10000000);
    retenue = ~~(result/10000000);
  }
  if(retenue>0) sum.unshift(retenue);
  return (typeof(sum)!="string")?this.gimme(sum):sum;
}

Calculator.prototype.multiplication = function(x,y){
  if(x.toString()=="0" || y.toString()=="0") return '0';
  var xdigits = (typeof(x)=="string")?this.translate(x):x,
      ydigits = (typeof(y)=="string")?this.translate(y):y,
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
    sum = [];
    retenue = 0;
    if(i<smaller_length){
      var f = smaller_length - i;
      for(k = 0; k < f; k++){
        sum.unshift(0);
      }
    }
    for(var j = greater_length; j > 0; j-- ){
      result = smaller[i-1]*greater[j-1]+retenue;
      sum.unshift(result%10000000);
      retenue = ~~(result/10000000);
    }
    if(retenue>0) sum.unshift(retenue);
    lines[lines.length] = sum;
  }
  var lines_length = lines.length,
      final_result = [0];
  if(lines_length>1){
    for(var i = 0; i < lines_length; i++){
      final_result = this.addition(final_result,lines[i]);
    }
    sum = final_result;
  }
  // Display sum
  return (typeof(sum)!="string")?this.gimme(sum):sum;
}
