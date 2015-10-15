describe('Addition function', function(){
  var a = addition(new LargeNumber('147586321412563694559633').getArray(), new LargeNumber('5874532698962144366844').getArray()),
      b = addition(new LargeNumber('999999999999999999999').getArray(), new LargeNumber('1').getArray()),
      c = addition(new LargeNumber('0').getArray(), new LargeNumber('4378').getArray()),
      d = addition(new LargeNumber('9999').getArray(), new LargeNumber('9999').getArray()),
      e = addition(new LargeNumber('1233434323432454521234').getArray(), new LargeNumber('99872343237868642879').getArray());

  it('finds the correct result for a', function(){
    expect(new LargeNumber(a).getValue()).toEqual('153460854111525838926477');
  });

  it('finds the correct result for b', function(){
    expect(new LargeNumber(b).getValue()).toEqual('1000000000000000000000');
  });

  it('finds the correct result for c', function(){
    expect(new LargeNumber(c).getValue()).toEqual('4378');
  });

  it('finds the correct result for d', function(){
    expect(new LargeNumber(d).getValue()).toEqual('19998');
  });

  it('finds the correct result for e', function(){
    expect(new LargeNumber(e).getValue()).toEqual('1333306666670323164113');
  });
});
