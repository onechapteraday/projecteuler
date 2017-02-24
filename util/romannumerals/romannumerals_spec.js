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

  it('return 4 for IV', function(){
    expect(romantodigits('IV')).toEqual(4);
  });

  it('return 5 for V', function(){
    expect(romantodigits('V')).toEqual(5);
  });

  it('return 6 for VI', function(){
    expect(romantodigits('VI')).toEqual(6);
  });

  it('return 7 for VII', function(){
    expect(romantodigits('VII')).toEqual(7);
  });

  it('return 8 for VIII', function(){
    expect(romantodigits('VIII')).toEqual(8);
  });

  it('return 9 for IX', function(){
    expect(romantodigits('IX')).toEqual(9);
  });

  it('return 10 for X', function(){
    expect(romantodigits('X')).toEqual(10);
  });

  it('return 11 for XI', function(){
    expect(romantodigits('XI')).toEqual(11);
  });

  it('return 12 for XII', function(){
    expect(romantodigits('XII')).toEqual(12);
  });

  it('return 13 for XIII', function(){
    expect(romantodigits('XIII')).toEqual(13);
  });

  it('return 14 for XIV', function(){
    expect(romantodigits('XIV')).toEqual(14);
  });

  it('return 15 for XV', function(){
    expect(romantodigits('XV')).toEqual(15);
  });

  it('return 16 for XVI', function(){
    expect(romantodigits('XVI')).toEqual(16);
  });

  it('return 17 for XVII', function(){
    expect(romantodigits('XVII')).toEqual(17);
  });

  it('return 18 for XVIII', function(){
    expect(romantodigits('XVIII')).toEqual(18);
  });

  it('return 19 for XIX', function(){
    expect(romantodigits('XIX')).toEqual(19);
  });

  it('return 20 for XX', function(){
    expect(romantodigits('XX')).toEqual(20);
  });

  it('return 3487 for MMMCDLXXXVII', function(){
    expect(romantodigits('MMMCDLXXXVII')).toEqual(3487);
  });
});

describe('Numbers to roman numerals function', function(){
  it('return II for 2', function(){
    expect(digitstoroman(2)).toEqual('II');
  });

  it('return XVII for 17', function(){
    expect(digitstoroman(17)).toEqual('XVII');
  });

  it('return CCCXL for 340', function(){
    expect(digitstoroman(340)).toEqual('CCCXL');
  });

  it('return MCMLXXXIX for 1989', function(){
    expect(digitstoroman(1989)).toEqual('MCMLXXXIX');
  });

  it('return MMMCDLXXXVII for 3487', function(){
    expect(digitstoroman(3487)).toEqual('MMMCDLXXXVII');
  });
});
