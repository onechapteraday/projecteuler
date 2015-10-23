describe('Common digit function', function(){
  it('expect 23 and 34 to have common digit', function(){
    expect(parseInt(commondigit(23,34))).toBe(3);
  });

  it('expect 50 and 15 to have common digit', function(){
    expect(parseInt(commondigit(50,15))).toBe(5);
  });

  it('expect 78 and 98 to have common digit', function(){
    expect(parseInt(commondigit(78,98))).toBe(8);
  });

  it('expect 61 and 62 to have common digit', function(){
    expect(parseInt(commondigit(62,61))).toBe(6);
  });

  it('expect 19 and 62 to be completely different', function(){
    expect(Boolean(commondigit(19,62))).toEqual(false);
  });
});
