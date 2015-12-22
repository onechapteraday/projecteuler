describe('Euler\'s totient function', function(){
  it('should find 1 as phi(1)', function(){
    expect(phi(1)).toEqual(1);
  });

  it('should find 12 as phi(13)', function(){
    expect(phi(13)).toEqual(12);
  });

  it('should find 24 as phi(39)', function(){
    expect(phi(39)).toEqual(24);
  });

  it('should find 20 as phi(50)', function(){
    expect(phi(50)).toEqual(20);
  });

  it('should find 24 as phi(72)', function(){
    expect(phi(72)).toEqual(24);
  });

  it('should find 54 as phi(81)', function(){
    expect(phi(81)).toEqual(54);
  });

  it('should find 60 as phi(99)', function(){
    expect(phi(99)).toEqual(60);
  });

  it('should find 172 as phi(346)', function(){
    expect(phi(346)).toEqual(172);
  });

  it('should find 738 as phi(1478)', function(){
    expect(phi(1478)).toEqual(738);
  });
});
