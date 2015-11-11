describe('Right triangles function', function(){
  it('returns 1 for perimeter p = 12', function(){
    expect(righttriangle(12)).toBe(1);
  });

  it('returns 3 for perimeter p = 120', function(){
    expect(righttriangle(120)).toBe(3);
  });

  it('returns 2 for perimeter p = 180', function(){
    expect(righttriangle(180)).toBe(3);
  });

  it('returns 8 for perimeter p = 840', function(){
    expect(righttriangle(840)).toBe(8);
  });
});
