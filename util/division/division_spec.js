describe('Division function', function(){
  var a = division(new LargeNumber('99999999999').getArray(), new LargeNumber('3').getArray()),
      a_mod = modulo(new LargeNumber('99999999999').getArray(), new LargeNumber('3').getArray()),
      b = division(new LargeNumber('8').getArray(), new LargeNumber('2').getArray()),
      b_mod = modulo(new LargeNumber('8').getArray(), new LargeNumber('2').getArray()),
      c = division(new LargeNumber('567').getArray(), new LargeNumber('87').getArray()),
      c_mod = modulo(new LargeNumber('567').getArray(), new LargeNumber('87').getArray());

  it('finds the correct result for a', function(){
    expect(new LargeNumber(a).getValue()).toEqual('33333333333');
  });

  it('finds the correct result for a_mod', function(){
    expect(new LargeNumber(a_mod).getValue()).toEqual('0');
  });

  it('finds the correct result for b', function(){
    expect(new LargeNumber(b).getValue()).toEqual('4');
  });

  it('finds the correct result for b_mod', function(){
    expect(new LargeNumber(b_mod).getValue()).toEqual('0');
  });

  it('finds the correct result for c', function(){
    expect(new LargeNumber(c).getValue()).toEqual('6');
  });

  it('finds the correct result for c_mod', function(){
    expect(new LargeNumber(c_mod).getValue()).toEqual('45');
  });
});
