function romantodigits(string){
  var romans = {'C' : 100, 'L' : 50, 'X' : 10, 'V' : 5, 'I' : 1},
      value = 0;
  for(var i = 0; i < string.length; i++){
    if(string[i]=='X' || string[i]=='I'){
      if(romans[string[i+1]]>romans[string[i]]){
        value += romans[string[i+1]];
	value -= romans[string[i]];
	i++;
      } else {
        value += romans[string[i]];
      }
    } else{
      value += romans[string[i]];
    }
  }
  return value;
}
