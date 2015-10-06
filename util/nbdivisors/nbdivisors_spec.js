describe('Number of divisors function', function(){
  it('should find 6 divisors for 12', function(){
    expect(nbdivisors(12)).toEqual(6);
  });

  it('should find 5 divisors for 16', function(){
    expect(nbdivisors(16)).toEqual(5);
  });

  it('should find 8 divisors for 2*7*19', function(){
    expect(nbdivisors(2*7*19)).toEqual(8);
  });

  it('should find 4 divisors for 123', function(){
    expect(nbdivisors(123)).toEqual(4);
  });

  it('should find 14 divisors for 1472', function(){
    expect(nbdivisors(1472)).toEqual(14);
  });

  it('should find 48 divisors for 4200', function(){
    expect(nbdivisors(4200)).toEqual(48);
  });

  it('should find 12 divisors for 16151844', function(){
    expect(nbdivisors(16151844)).toEqual(12);
  });

  it('should find 4 divisors for 1262210962', function(){
    expect(nbdivisors(1262210962)).toEqual(4);
  });
});
