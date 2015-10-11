describe('Abundant numbers function', function(){
  var a = [1,2,3,4,5],
      b = [0,7,16,23,48];

  it('should find the correct sum', function(){
    expect(a.sum()).toEqual(15);
    expect(b.sum()).toEqual(94);
  });

  it('should swap elements as expected', function(){
    expect(a.swap(0,2)).toEqual([3,2,1,4,5]);
    expect(b.swap(4,1)).toEqual([0,48,16,23,7]);
  });

  it('should generate permutations as expected', function(){
    expect(a.permutations(a.length).length).toEqual(120);
  });
});
