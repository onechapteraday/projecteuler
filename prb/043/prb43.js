function prb43(){
  var m02 = [],
      m03 = [],
      m05 = [],
      m07 = [],
      m11 = [],
      m13 = [],
      m17 = [];
  for(var i = 12; i < 1000; i++){
    if(withnorepeateddigits(i)){
      if(i%2==0) m02.push(i);
      if(i%3==0) m03.push(i);
      if(i%5==0) m05.push(i);
      if(i%7==0) m07.push(i);
      if(i%11==0) m11.push(i);
      if(i%13==0) m13.push(i);
      if(i%17==0) m17.push(i);
    }
  }
  var tab = match(m02,match(m03,match(m05,match(m07,match(m11,match(m13,m17)))))),
      temp = new Array();
  for(var i = 0; i < tab.length; i++){
    var x = tab[i].split(""),
        digit = 0,
        sum = 0;
    for(var j = 0; j < x.length; j++) sum += parseInt(x[j]);
    digit = 45 - sum;
    temp.push(parseInt(digit+tab[i]));
  }
  return temp.sum();
}
