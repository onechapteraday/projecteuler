function sudokuchecker(array){
  // check for length
  if(array.length!=9) return false;
  for(var i = 0; i < array.length; i++){
    if(array[i].length!=9)
      return false;
  }

  // check if all numbers from 1 to 9 are in the array
  var pandigitalcheck = function(arr){
    var t = arr.slice();
    t.sort((x,y)=>x-y);
    for(var j = 1; j < 10; j++){
     if(t[j-1]!=j)
       return false;
    }
    return true;
  }

  // check rows
  for(var i = 0; i < array.length; i++){
    if(!pandigitalcheck(array[i]))
      return false;
  }

  // check columns
  for(var i = 0; i < array.length; i++){
    var temp = [];
    for(var j = 0; j < array.length; j++){
      temp.push(array[j][i]);
    }
    if(!pandigitalcheck(temp))
      return false;
  }

  // check squares
  for(var k = 0; k < array.length; k+=3){
    for(var l = 0; l < array.length; l+=3){
      var temp = [];
      for(var i = k; i < k+3; i++){
        for(var j = l; j < l+3; j++){
          temp.push(array[i][j]);
        }
      }
      if(!pandigitalcheck(temp))
        return false;
    }
  }

  return true;
}
