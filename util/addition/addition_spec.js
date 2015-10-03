describe('Addition function', function(){
  var a = addition('147586321412563694559633','5874532698962144366844'),
      b = addition('999999999999999999999','1'),
      c = addition('0','4378'),
      d = addition('9999','9999'),
      e = addition('1233434323432454521234','99872343237868642879');

  it('finds the correct result for a', function(){
    expect(a).toEqual('153460854111525838926477');
  });

  it('finds the correct result for b', function(){
    expect(b).toEqual('1000000000000000000000');
  });

  it('finds the correct result for c', function(){
    expect(c).toEqual('4378');
  });

  it('finds the correct result for d', function(){
    expect(d).toEqual('19998');
  });

  it('finds the correct result for e', function(){
    expect(e).toEqual('1333306666670323164113');
  });
});
