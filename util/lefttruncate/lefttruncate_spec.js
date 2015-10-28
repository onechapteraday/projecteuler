describe('Left truncate function', function(){
  it('should return [3797,797,97,7] for 3797', function(){
    expect(left(3797)).toEqual([3797,797,97,7]);
  });

  it('should return [84521,4521,521,21,1] for 84521', function(){
    expect(left(84521)).toEqual([84521,4521,521,21,1]);
  });

  it('should return [903,3,3] for 903', function(){
    expect(left(903)).toEqual([903,3,3]);
  });

  it('should return [16320,6320,320,20,0] for 16320', function(){
    expect(left(16320)).toEqual([16320,6320,320,20,0]);
  });

  it('should return [479,79,9] for 479', function(){
    expect(left(479)).toEqual([479,79,9]);
  });
});
