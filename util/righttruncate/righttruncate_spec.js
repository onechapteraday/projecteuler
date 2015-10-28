describe('Right truncate function', function(){
  it('should return [3797,379,37,3] for 3797', function(){
    expect(right(3797)).toEqual([3797,379,37,3]);
  });

  it('should return [84521,8452,845,84,8] for 84521', function(){
    expect(right(84521)).toEqual([84521,8452,845,84,8]);
  });

  it('should return [903,90,9] for 903', function(){
    expect(right(903)).toEqual([903,90,9]);
  });

  it('should return [16320,1632,163,16,1] for 16320', function(){
    expect(right(16320)).toEqual([16320,1632,163,16,1]);
  });

  it('should return [479,47,4] for 479', function(){
    expect(right(479)).toEqual([479,47,4]);
  });
});
