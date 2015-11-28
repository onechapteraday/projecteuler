describe('Subtraction function', function(){
  var a = subtraction('153460854111525838926477', '5874532698962144366844'),
      b = subtraction('1000000000000000000000', '1');
      c = subtraction('4378', '4378'),
      d = subtraction('19998','9999'),
      e = subtraction('1333306666670323164113', '99872343237868642879'),
      f = subtraction('789654', '654987'),
      g = subtraction('9999', '9998');

  it('finds the correct result for a', function(){
    expect(a).toEqual('147586321412563694559633');
  });

  it('finds the correct result for b', function(){
    expect(b).toEqual('999999999999999999999');
  });

  it('finds the correct result for c', function(){
    expect(c).toEqual('0');
  });

  it('finds the correct result for d', function(){
    expect(d).toEqual('9999');
  });

  it('finds the correct result for e', function(){
    expect(e).toEqual('1233434323432454521234');
  });

  it('finds the correct result for f', function(){
    expect(f).toEqual('134667');
  });

  it('finds the correct result for g', function(){
    expect(g).toEqual('1');
  });
});
