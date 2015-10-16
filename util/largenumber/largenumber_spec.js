describe('Large numbers', function(){
  var a = new LargeNumber([1345]),
      b = new LargeNumber('14587291');

  it('should define properly value', function(){
    expect(a.getValue()).toBeDefined();
    expect(a.getValue()).toEqual('1345');
    expect(b.getValue()).toBeDefined();
    expect(b.getValue()).toEqual('14587291');
  });

  it('should define properly array', function(){
    expect(a.getArray()).toBeDefined();
    expect(a.getArray()).toEqual([1345]);
    expect(b.getArray()).toBeDefined();
    expect(b.getArray()).toEqual([1,4587291]);
  });

  it('don\'t give access to private variables', function(){
    expect(a.array).toBeUndefined();
    expect(a.value).not.toBeDefined();
    expect(b.array).toBeUndefined();
    expect(b.value).not.toBeDefined();
  });

  it('should set properly new values from setArray', function(){
    a.setArray([9,9916993]);
    expect(a.getArray()).toEqual([9,9916993]);
    expect(a.getValue()).toEqual('99916993');
  });

  it('should set properly new values from setValue', function(){
    b.setValue('1425236521987');
    expect(b.getArray()).toEqual([142523,6521987]);
    expect(b.getValue()).toEqual('1425236521987');
  });
});
