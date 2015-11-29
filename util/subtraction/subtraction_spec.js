describe('Subtraction function', function(){
  var a = subtraction(new LargeNumber('153460854111525838926477').getArray(), new LargeNumber('5874532698962144366844').getArray()),
      b = subtraction(new LargeNumber('1000000000000000000000').getArray(), new LargeNumber('1').getArray());
      c = subtraction(new LargeNumber('4378').getArray(), new LargeNumber('4378').getArray()),
      d = subtraction(new LargeNumber('199998').getArray(), new LargeNumber('99999').getArray()),
      e = subtraction(new LargeNumber('1333306666670323164113').getArray(), new LargeNumber('99872343237868642879').getArray()),
      f = subtraction(new LargeNumber('789654').getArray(), new LargeNumber('654987').getArray()),
      g = subtraction(new LargeNumber('9999').getArray(), new LargeNumber('9998').getArray()),
      h = subtraction(new LargeNumber('100000000000000').getArray(), new LargeNumber('99999990000001').getArray());

  it('finds the correct result for a', function(){
    expect(new LargeNumber(a).getValue()).toEqual('147586321412563694559633');
  });

  it('finds the correct result for b', function(){
    expect(new LargeNumber(b).getValue()).toEqual('999999999999999999999');
  });

  it('finds the correct result for c', function(){
    expect(new LargeNumber(c).getValue()).toEqual('0');
  });

  it('finds the correct result for d', function(){
    expect(new LargeNumber(d).getValue()).toEqual('99999');
  });

  it('finds the correct result for e', function(){
    expect(new LargeNumber(e).getValue()).toEqual('1233434323432454521234');
  });

  it('finds the correct result for f', function(){
    expect(new LargeNumber(f).getValue()).toEqual('134667');
  });

  it('finds the correct result for g', function(){
    expect(new LargeNumber(g).getValue()).toEqual('1');
  });

  it('finds the correct result for h', function(){
    expect(new LargeNumber(h).getValue()).toEqual('9999999');
  });
});
