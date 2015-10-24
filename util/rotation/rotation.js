/**/

function rotation(int){
  var number = int.toString(),
      rotations = [];
  for(var i = 0; i < number.length; i++){
    var start = number.charAt(0),
        rest = number.substring(0,0) + number.substring(1,number.length),
	number = rest.concat(start);
    rotations.push(parseInt(number));
  }
  return rotations;
}
