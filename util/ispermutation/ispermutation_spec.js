describe('Is permutation function', function(){
  it('should return false for two numbers that have not the same length', function(){
    expect(ispermutation(Math.ceil(Math.random() * (999 - 111) + 111),Math.ceil(Math.random() * (9999 - 1111) + 1111))).toBeFalsy();
  });

  it('should return false for two numbers with same length but different digits', function(){
    expect(ispermutation(Math.ceil(Math.random() * (4999 - 1111) + 1111),Math.ceil(Math.random() * (9999 - 5000) + 5000))).toBeFalsy();
  });

  it('should return false for two numbers with only one different digit', function(){
    expect(ispermutation(1452,1453)).toBeFalsy();
  });

  it('returns true for the same repeated number', function(){
    expect(ispermutation(1987,1987)).toBeTruthy();
  });

  it('returns true for 56743 and 37456', function(){
    expect(ispermutation(56743,37456)).toBeTruthy();
  });

  it('returns true for 136547892145236987 and 251463987362541987', function(){
    expect(ispermutation(136547892145236, 251463987362541)).toBeTruthy();
  });
});
