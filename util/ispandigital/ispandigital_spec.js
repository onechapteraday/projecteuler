describe('Check if numbers are 9-digits pandigital', function(){
  it('should consider numbers as 9-digits pandigital', function(){
    expect(ispandigital(126589374)).toBe(true);
    expect(ispandigital(987654321)).toBe(true);
    expect(ispandigital(327654189)).toBe(true);
  });

  it('should consider others as not pandigital', function(){
    expect(ispandigital(887654321)).not.toBe(true);
    expect(ispandigital(012345678)).not.toBe(true);
    expect(ispandigital(1357)).not.toBe(true);
  });
});
