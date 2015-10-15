describe('Multiplication function', function(){
  var a = multiplication(new LargeNumber('147586321412563694559633').getArray(), new LargeNumber('5874532698962144366844').getArray()),
      b = multiplication(new LargeNumber('999999999999999999999').getArray(), new LargeNumber('1').getArray()),
      c = multiplication(new LargeNumber('0').getArray(), new LargeNumber('4378').getArray()),
      d = multiplication(new LargeNumber('9999').getArray(), new LargeNumber('9999').getArray()),
      e = multiplication(new LargeNumber('1233434323432454521234').getArray(), new LargeNumber('99872343237868642879').getArray());

  it('finds the correct result for a', function(){
    expect(new LargeNumber(a).getValue()).toEqual('867000671057642319468574944988733500186008252');
  });

  it('finds the correct result for b', function(){
    expect(new LargeNumber(b).getValue()).toEqual('999999999999999999999');
  });

  it('finds the correct result for c', function(){
    expect(new LargeNumber(c).getValue()).toEqual('0');
  });

  it('finds the correct result for d', function(){
    expect(new LargeNumber(d).getValue()).toEqual('99980001');
  });

  it('finds the correct result for e', function(){
    expect(new LargeNumber(e).getValue()).toEqual('123185976111214383871838337251819268392686');
  });
});
