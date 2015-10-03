describe('Binomial coefficient function', function(){
  it('finds the correct result for n=5 and k=3', function(){
    expect(binomial(5,3)).toEqual(10);
  });

  it('finds the correct result for n=10 and k=4', function(){
    expect(binomial(10,4)).toEqual(210);
  });

  it('finds the correct result for n=11 and k=3', function(){
    expect(binomial(11,3)).toEqual(165);
  });

  it('finds the correct result for n=15 and k=5', function(){
    expect(binomial(15,5)).toEqual(3003);
  });

  it('finds the correct result for n=16 and k=3', function(){
    expect(binomial(16,3)).toEqual(560);
  });

  it('finds the correct result for n=47 and k=8', function(){
    expect(binomial(47,8)).toEqual(314457495);
  });

  it('finds the correct result for n=52 and k=4', function(){
    expect(binomial(52,4)).toEqual(270725);
  });

  it('finds the correct result for n=12 and k=2 * n=14 and k=1', function(){
    expect(binomial(12,2)*binomial(14,1)).toEqual(924);
  });
});
