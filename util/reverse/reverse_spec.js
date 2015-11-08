describe('The reverse function', function(){
  var a = 137,
      b = 2469,
      c = 32,
      d = 50;

  it('is making numbers', function(){
    expect(!isNaN(reverse(a,10))).toBe(true);
    expect(!isNaN(reverse(b,10))).toBe(true);
    expect(!isNaN(reverse(c,10))).toBe(true);
  });

  it('is doing a good reverse!', function(){
    expect(reverse(a,10)).toEqual(731);
    expect(reverse(b,10)).toEqual(9642);
    expect(reverse(c,10)).toEqual(23);
    expect(reverse(d,10)).toEqual(5);
  });

  it('should do a good reverse of 164586014607', function(){
    expect(reverse(164586014607)).toEqual(706410685461);
  });
});
