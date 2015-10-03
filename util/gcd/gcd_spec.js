describe('Greatest common divisor function', function(){
  it('should find 6 as the gcd of 54 and 24', function(){
    expect(gcd(54,24)).toEqual(6);
  });

  it('should find 12 as the gcd of 180 and 48', function(){
    expect(gcd(180,48)).toEqual(12);
  });

  it('should find 43 as the gcd of 215 and 559', function(){
    expect(gcd(215,559)).toEqual(43);
  });

  it('should find 4998 as the gcd of 1814274 and 259896', function(){
    expect(gcd(1814274,259896)).toEqual(4998);
  });
});
