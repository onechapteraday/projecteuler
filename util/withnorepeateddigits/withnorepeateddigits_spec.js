describe('Check if number have any repeated digits', function(){
  it('should return true for 74356, 123, 0', function(){
    expect(withnorepeateddigits(74356)).toBeTruthy();
    expect(withnorepeateddigits(123)).toBeTruthy();
    expect(withnorepeateddigits(0)).toBeTruthy();
  });

  it('should return false for 74357, 600, 88', function(){
    expect(withnorepeateddigits(74357)).toBeFalsy();
    expect(withnorepeateddigits(600)).toBeFalsy();
    expect(withnorepeateddigits(88)).toBeFalsy();
  });
});
