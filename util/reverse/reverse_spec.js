describe('The reverse function', function(){
  var a = 137,
      b = 2469,
      c = 32,
      d = 50;

  it('is making numbers', function(){
    expect(!isNaN(reverse(a))).toBe(true);
    expect(!isNaN(reverse(b))).toBe(true);
    expect(!isNaN(reverse(c))).toBe(true);
  });

  it('is doing a good reverse!', function(){
    expect(reverse(a)).toEqual(731);
    expect(reverse(b)).toEqual(9642);
    expect(reverse(c)).toEqual(23);
    expect(reverse(d)).toEqual(5);
  });
});
