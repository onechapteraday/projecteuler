describe('Prime factors function', function(){
  it('gives an empty value when the function is called with nothing', function(){
    expect(factors()).toEqual([]);
  });

  it('returns a truthy value anyway', function(){
    expect(factors()).toBeTruthy();
  });

  it('always returns an array', function(){
    expect(Array.isArray(factors())).toBe(true);
  });

  it('returns 2 and 3 if 6 is given', function(){
    expect(factors(6)).toEqual([2,3]);
  });

  it('returns 2, 2 and 2 if 8 is given', function(){
    expect(factors(8)).toEqual([2,2,2]);
  });

  it('returns many primes factors if a large number is given', function(){
    expect(factors(2*2*2*5*11*17*19)).toEqual([2,2,2,5,11,17,19]);
  });

  it('returns the same number if a large prime is given', function(){
    expect(factors(9973)).toEqual([9973]);
  });
});
