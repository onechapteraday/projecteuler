describe('Roman numerals to digits function', function(){
  it('return 1 for I', function(){
    expect(romantodigits('I')).toEqual(1);
  });

  it('return 2 for II', function(){
    expect(romantodigits('II')).toEqual(2);
  });

  it('return 3 for III', function(){
    expect(romantodigits('III')).toEqual(3);
  });
});
