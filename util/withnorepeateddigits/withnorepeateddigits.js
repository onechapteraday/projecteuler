function withnorepeateddigits(n){
  var s = n.toString(),
      unique = true;
  for(var i = 0; i < s.length-1; i++){
    for(var j = i+1; j < s.length; j++){
      if(s[i]==s[j]){
        unique = false;
        break;
      }
    }
    if(!unique) break;
  }
  return unique;
}
