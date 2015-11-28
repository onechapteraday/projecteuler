describe('Subtraction function', function(){
  var a = subtraction(new LargeNumber('153460854111525838926477').getValue(), new LargeNumber('5874532698962144366844').getValue()),
      b = subtraction(new LargeNumber('1000000000000000000000').getValue(), new LargeNumber('1').getValue());
      c = subtraction(new LargeNumber('4378').getValue(), new LargeNumber('4378').getValue()),
      d = subtraction(new LargeNumber('19998').getValue(), new LargeNumber('9999').getValue()),
      e = subtraction(new LargeNumber('1333306666670323164113').getValue(), new LargeNumber('99872343237868642879').getValue());

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
    expect(new LargeNumber(d).getValue()).toEqual('9999');
  });

  it('finds the correct result for e', function(){
    expect(new LargeNumber(e).getValue()).toEqual('1233434323432454521234');
  });
});
