describe('Division function', function(){
  var a = division(new LargeNumber('99999999999').getArray(), new LargeNumber('3').getArray()),
      b = division(new LargeNumber('8').getArray(), new LargeNumber('2').getArray());

  it('finds the correct result for a', function(){
    expect(new LargeNumber(a).getValue()).toEqual('33333333333');
  });

  it('finds the correct result for b', function(){
    expect(new LargeNumber(b).getValue()).toEqual('4');
  });
});
