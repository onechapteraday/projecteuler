describe('Is Lychrel number function', function(){
  it('should return false for 47', function(){
    expect(islychrel(47)).toBe(false);
  });

  it('should return true for 196', function(){
    expect(islychrel(196)).toBe(true);
  });

  it('should return false for 349', function(){
    expect(islychrel(349)).toBe(false);
  });

  it('should return true for 4994', function(){
    expect(islychrel(4994)).toBeTruthy();
  });
});
