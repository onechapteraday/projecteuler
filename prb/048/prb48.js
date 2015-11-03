function prb48(){
  var sum = new LargeNumber('0');
  for(var i = 1; i <= 1000; i++){
    var mul = new LargeNumber('1');
    for(var j = 0; j < i; j++){
      mul.setArray( multiplication(mul.getArray(), new LargeNumber(String(i)).getArray() ) );
    }
    sum.setArray( addition(sum.getArray(),mul.getArray()));
  }
  var s = sum.getValue();
  return parseInt(s.substr(s.length-10));
}
