describe('Square root period function', function(){
  it('returns 0 if the number is a perfect square root', function(){
    expect(sqrtperiod(4)).toEqual(0);
    expect(sqrtperiod(16)).toEqual(0);
    expect(sqrtperiod(225)).toEqual(0);
  });

  it('returns 1 for n=2', function(){
    expect(sqrtperiod(2)).toEqual(1);
  });

  it('returns 2 for n=3', function(){
    expect(sqrtperiod(3)).toEqual(2);
  });

  it('returns 1 for n=5', function(){
    expect(sqrtperiod(5)).toEqual(1);
  });

  it('returns 2 for n=6', function(){
    expect(sqrtperiod(6)).toEqual(2);
  });

  it('returns 4 for n=7', function(){
    expect(sqrtperiod(7)).toEqual(4);
  });

  it('returns 2 for n=8', function(){
    expect(sqrtperiod(8)).toEqual(2);
  });

  it('returns 1 for n=10', function(){
    expect(sqrtperiod(10)).toEqual(1);
  });

  it('returns 12 for n=46', function(){
    expect(sqrtperiod(46)).toEqual(12);
  });

  it('returns 11 for n=61', function(){
    expect(sqrtperiod(61)).toEqual(11);
  });

  it('returns 7 for n=73', function(){
    expect(sqrtperiod(73)).toEqual(7);
  });

  it('returns 16 for n=94', function(){
    expect(sqrtperiod(94)).toEqual(16);
  });

  it('returns 4 for n=4895', function(){
    expect(sqrtperiod(4895)).toEqual(4);
  });

  it('returns 122 for n=13732', function(){
    expect(sqrtperiod(13732)).toEqual(122);
  });
});
