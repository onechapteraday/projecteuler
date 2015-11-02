describe('Pentagonal numbers function', function(){
  it('finds the correct result for n=2', function(){
    expect(pentagonal(2)).toEqual(5);
  });

  it('finds the correct result for n=6', function(){
    expect(pentagonal(6)).toEqual(51);
  });

  it('finds the correct result for n=9', function(){
    expect(pentagonal(9)).toEqual(117);
  });

  it('finds the correct result for n=13', function(){
    expect(pentagonal(13)).toEqual(247);
  });

  it('finds the correct result for n=23', function(){
    expect(pentagonal(23)).toEqual(782);
  });

  it('finds the correct result for n=25', function(){
    expect(pentagonal(25)).toEqual(925);
  });
});
