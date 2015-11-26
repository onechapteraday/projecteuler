/* Find nth convergent of n */

function convergent(n,nth){
  var tab = sqrtsequence(n),
      sequence = [];
  var useSeq = function(){
    var temp = tab[0];
    tab.shift();
    tab.push(temp);
    return temp;
  }
  for(var j = 0; j < nth; j++){
    sequence.push(useSeq());
  }
  var numerator = new LargeNumber([0]),
      denominator = new LargeNumber([1]);
  for(var i = nth-1; i > 0; i--){
    var num = numerator.getArray(),
        den = denominator.getArray(),
        seq = new LargeNumber([sequence[i-1]]).getArray();
    denominator.setArray(addition(num, multiplication(seq,den)));
    numerator.setArray(den);
  }
  numerator.setArray(addition(numerator.getArray(), multiplication([Math.floor(Math.sqrt(n))],denominator.getArray())));
  return [numerator.getValue(),denominator.getValue()];
}
