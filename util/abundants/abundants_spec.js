describe('Abundant numbers function', function(){
  it('should find 1 abundant number under 16', function(){
    expect(abundants(16)).toEqual([12]);
  });

  it('should find 5 abundant numbers under 40', function(){
    expect(abundants(40).length).toEqual(6);
  });

  it('should find some specific abundant numbers under 120', function(){
    expect(abundants(120)).toContain(30);
    expect(abundants(120)).toContain(48);
    expect(abundants(120)).toContain(56);
    expect(abundants(120)).toContain(102);
    expect(abundants(120)).toContain(114);
  });
});
