function match(tabx,taby){
  var temp = new Array();
  for(var i = 0; i < tabx.length; i++){
    for(var j = 0; j < taby.length; j++){
      var first = zerofill(tabx[i],3).split(""),
          second = zerofill(taby[j],3).split(""),
          result = first.intersect(second);
      if(result){
        if(withnorepeateddigits(result))
          temp.push(result);
      }
    }
  }
  return temp;
}
