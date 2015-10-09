describe('Binary search function', function(){
  var primes = [2,3,5,7,11,13,17],
      empty = [];

  it('finds index 2 for 5', function(){
    expect(binarysearch(primes, 5)).toEqual(2);
  });

  it('finds a specific index for 11', function(){
    expect(binarysearch(primes, 11)).toBeGreaterThan(-1);
  });

  it('should return -1 for 12 (not a prime)', function(){
    expect(binarysearch(primes, 12)).toEqual(-1);
  });

  it('should return -1 for an empty array', function(){
    expect(binarysearch(empty, 100)).toEqual(-1);
  });

  it('should return the correct results for the boundary cases', function(){
    expect(binarysearch(primes, 2)).toEqual(0);
    expect(binarysearch(primes, 7)).toEqual(3);
    expect(binarysearch(primes, 17)).toEqual(6);
  });
});
