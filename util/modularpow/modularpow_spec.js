describe('Prime factors function', function(){
  it('gives the correct result for b=5, e=3, m=13', function(){
    expect(modularpow(5,3,13)).toEqual(8);
  });

  it('gives the correct result for b=4, e=13, m=497', function(){
    expect(modularpow(4,13,497)).toEqual(445);
  });

  it('gives the correct result for b=7, e=256, m=13', function(){
    expect(modularpow(7,256,13)).toEqual(9);
  });

  it('gives the correct result for b=5, e=117, m=19', function(){
    expect(modularpow(5,117,19)).toEqual(1);
  });

  it('gives the correct result for b=98765, e=1234, m=123557', function(){
    expect(modularpow(98765,1234,123557)).toEqual(70506);
  });
});
