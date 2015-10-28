describe('Istriangle function', function(){
  it('should return true for 15', function(){
    expect(istriangle(15)).toBe(true);
  });

  it('should return false for 17', function(){
    expect(istriangle(17)).toBeFalsy();
  });

  it('should return true for 28', function(){
    expect(istriangle(28)).toBeTruthy();
  });

  it('should return false for 34', function(){
    expect(istriangle(34)).toBe(false);
  });

  it('should return true for 55', function(){
    expect(istriangle(55)).toBe(true);
  });

  it('should return true for 4656', function(){
    expect(istriangle(4656)).toBeTruthy();
  });
});
