describe('Multiplication function', function(){
  var a = multiplication('147586321412563694559633','5874532698962144366844'),
      b = multiplication('999999999999999999999','1'),
      c = multiplication('0','4378'),
      d = multiplication('9999','9999'),
      e = multiplication('1233434323432454521234','99872343237868642879');

  it('finds the correct result for a', function(){
    expect(a).toEqual('867000671057642319468574944988733500186008252');
  });

  it('finds the correct result for b', function(){
    expect(b).toEqual('999999999999999999999');
  });

  it('finds the correct result for c', function(){
    expect(c).toEqual('0');
  });

  it('finds the correct result for d', function(){
    expect(d).toEqual('99980001');
  });

  it('finds the correct result for e', function(){
    expect(e).toEqual('123185976111214383871838337251819268392686');
  });
});
