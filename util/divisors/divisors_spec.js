describe('Number of divisors function', function(){
  it('should find 6 divisors for 12', function(){
    expect(divisors(12)).toEqual(6);
  });

  it('should find 4 divisors for 123', function(){
    expect(divisors(123)).toEqual(4);
  });

  it('should find 14 divisors for 1472', function(){
    expect(divisors(1472)).toEqual(14);
  });

  it('should find 48 divisors for 4200', function(){
    expect(divisors(4200)).toEqual(48);
  });

  it('should find 12 divisors for 16151844', function(){
    expect(divisors(16151844)).toEqual(12);
  });

  it('should find 4 divisors for 1262210962', function(){
    expect(divisors(1262210962)).toEqual(4);
  });
});
