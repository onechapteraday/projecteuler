describe('Math.pow function for LargeNumbers', function(){
  it('returns 6561 for n=3 and k=8', function(){
    expect(pow([3],8)).toEqual([6561]);
  });

  it('returns 10000000000000000 for n=10 and k=16', function(){
    expect(pow([10],16)).toEqual([100,0,0]);
  });
});
