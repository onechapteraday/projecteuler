describe('Pentagonal numbers function', function(){
  it('should return true for n=5', function(){
    expect(ispentagonal(5)).toBe(true);
  });

  it('should return false for n=14', function(){
    expect(ispentagonal(14)).toBe(false);
  });

  it('should return false for n=27', function(){
    expect(ispentagonal(27)).toBe(false);
  });

  it('should return true for n=51', function(){
    expect(ispentagonal(51)).toBe(true);
  });

  it('should return false for n=86', function(){
    expect(ispentagonal(86)).toBe(false);
  });

  it('should return true for n=117', function(){
    expect(ispentagonal(117)).toBe(true);
  });

  it('should return true for n=247', function(){
    expect(ispentagonal(247)).toBe(true);
  });

  it('should return true for n=782', function(){
    expect(ispentagonal(782)).toBe(true);
  });

  it('should return true for n=925', function(){
    expect(ispentagonal(925)).toBe(true);
  });
});
