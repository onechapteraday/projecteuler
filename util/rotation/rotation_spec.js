describe('Number rotations function', function(){
  it('expects rotations of 79 to be [79,97]', function(){
    expect(rotation(79).sort((x,y) => x-y)).toEqual([79,97]);
  });

  it('expects rotations of 791 to be [179,791,917]', function(){
    expect(rotation(791).sort((x,y) => x-y)).toEqual([179,791,917]);
  });
});
