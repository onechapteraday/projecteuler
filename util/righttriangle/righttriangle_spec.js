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

//  it('returns false for 375 and 401', function(){
//    expect(amicable(375,401)).toBe(false);
//  });
//
//  it('returns true for 1184 and 1210', function(){
//    expect(amicable(1184,1210)).toBe(true);
//  });
//
//  it('returns true for 2620 and 2924', function(){
//    expect(amicable(2620,2924)).toBe(true);
//  });
//
//  it('returns true for 5020 and 5564', function(){
//    expect(amicable(5020,5564)).toBe(true);
//  });
});
