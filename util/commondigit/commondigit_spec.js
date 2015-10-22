describe('Common digit function', function(){
  it('expect 23 and 34 to have common digit', function(){
    expect(parseInt(commondigit(23,34))).toEqual(3);
  });

  it('expect 50 and 15 to have common digit', function(){
    expect(parseInt(commondigit(50,15))).toEqual(5);
  });

  it('expect 78 and 98 to have common digit', function(){
    expect(parseInt(commondigit(78,98))).toEqual(8);
  });

  it('expect 61 and 62 to have common digit', function(){
    expect(parseInt(commondigit(62,61))).toEqual(6);
  });
});
