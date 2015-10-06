describe('Amicable numbers function', function(){
  it('returns true for 284 and 220', function(){
    expect(amicable(220,284)).toBe(true);
  });

  it('returns false for 375 and 401', function(){
    expect(amicable(375,401)).toBe(false);
  });

  it('returns true for 1184 and 1210', function(){
    expect(amicable(1184,1210)).toBe(true);
  });

  it('returns true for 2620 and 2924', function(){
    expect(amicable(2620,2924)).toBe(true);
  });

  it('returns true for 5020 and 5564', function(){
    expect(amicable(5020,5564)).toBe(true);
  });
});
