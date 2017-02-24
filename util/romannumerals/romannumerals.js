function romantodigits(string){
  var romans = {'M' : 1000, 'D' : 500, 'C' : 100, 'L' : 50, 'X' : 10, 'V' : 5, 'I' : 1},
      value = 0;
  for(var i = 0; i < string.length; i++){
    if(string[i]=='C' || string[i]=='X' || string[i]=='I'){
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

function digitstoroman(value){
  var romans = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'},
      string = '';

  var keys = Object.keys(romans);

  for (var i = keys.length-1; i >= 0; i--) {
    if (value - keys[i] >= 0) {
      string += romans[keys[i]];
      value -= keys[i];
      i++;
    }
  }

  return string;
}
