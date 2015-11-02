describe('Array prototypes add some methods', function(){
  var a = [1,2,3,4,5],
      b = [0,7,16,23,48],
      c = [6,8,1];

  it('should find the correct sum', function(){
    expect(a.sum()).toEqual(15);
    expect(b.sum()).toEqual(94);
    expect(c.sum()).toEqual(15);
  });

  it('should swap elements as expected', function(){
    expect(a.swap(0,2)).toEqual([3,2,1,4,5]);
    expect(b.swap(4,1)).toEqual([0,48,16,23,7]);
    expect(c.swap(1,0)).toEqual([8,6,1]);
  });

  it('should generate permutations as expected', function(){
    expect(a.permutations(a.length).length).toEqual(120);
    expect(b.permutations(b.length).length).toEqual(120);
    expect(c.permutations(c.length).sort()).toEqual(['168','186','618','681','816','861']);
  });

  it('returns a smaller array', function(){
    var d = [14,85,62,3],
        e = [0,7,13,965],
	f = [34678,2134,8907,3456,7891,124];

    expect(d.remove(62)).toEqual([14,85,3]);
    expect(e.remove(0)).toEqual([7,13,965]);
    expect(f.remove(124)).toEqual([34678,2134,8907,3456,7891]);
  });

  it('should return an ordered array with unique elements', function(){
    expect(c.unique()).toEqual([1,6,8]);
    expect([45,45,2,13,69].unique()).toEqual([2,13,45,69]);
  });

  it('should not fail with undefined', function(){
    expect([45,45,2,13,69,undefined].unique()).toEqual([2,13,45,69,undefined]);
  });

  it('should return \'678\'', function(){
    expect([6,7].intersect([7,8])).toEqual('678');
  });

  it('should return \'1234\'', function(){
    expect([1,2,3].intersect([2,3,4])).toEqual('1234');
  });

  it('should return \'12345\'', function(){
    expect([1,2,3,4].intersect([2,3,4,5])).toEqual('12345');
  });

  it('should return \'1234567\'', function(){
    expect([1,2,3,4].intersect([2,3,4,5,6,7])).toEqual('1234567');
  });
});
