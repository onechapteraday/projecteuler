describe('Champernowne function', function(){
  var c = champernowne(100);

  it('should return 1 for champernowne[12]', function(){
    expect(parseInt(c[12])).toBe(1);
  });

  it('should return 6 for champernowne[23]', function(){
    expect(parseInt(c[23])).toBe(6);
  });
});
