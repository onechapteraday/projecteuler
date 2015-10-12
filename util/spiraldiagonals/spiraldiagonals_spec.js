describe('Spiral diagonals function', function(){
  it('should return the correct result for a 3x3 grid', function(){
    expect(spiraldiagonals(3)).toBe(25);
  });

  it('should return the correct result for a 5x5 grid', function(){
    expect(spiraldiagonals(5)).toBe(101);
  });

  it('should return the correct result for a 7x7 grid', function(){
    expect(spiraldiagonals(7)).toBe(261);
  });
});
