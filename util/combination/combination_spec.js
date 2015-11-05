describe('Combination function', function(){
  it('gives the correct result for n=4 and r=2', function(){
    expect(combination(4,2)).toEqual(6);
  });

  it('gives the correct result for n=5 and r=3', function(){
    expect(combination(5,3)).toEqual(10);
  });

  it('gives the correct result for n=16 and r=3', function(){
    expect(combination(16,3)).toEqual(560);
  });

  it('gives the correct result for n=18 and r=4', function(){
    expect(combination(18,4)).toEqual(3060);
  });

  it('gives the correct result for n=52 and r=5', function(){
    expect(combination(52,5)).toEqual(2598960);
  });

  it('gives the correct result for n=56 and r=13', function(){
    expect(combination(56,13)).toEqual(1889912732400);
  });
});
