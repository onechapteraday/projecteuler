describe('Fill number with x number of zeros ahead', function(){
  it('should return 009 for zerofill(9,3)', function(){
    expect(zerofill(9,3)).toEqual('009');
  });

  it('should return 0009 for zerofill(9,4)', function(){
    expect(zerofill(9,4)).toEqual('0009');
  });

  it('should return 00106 for zerofill(106,5)', function(){
    expect(zerofill(106,5)).toEqual('00106');
  });

  it('should return 08 for zerofill(8,2)', function(){
    expect(zerofill(8,2)).toEqual('08');
  });

  it('should return 3 for zerofill(3,1)', function(){
    expect(zerofill(3,1)).toEqual('3');
  });

  it('should return 7 for zerofill(7,0)', function(){
    expect(zerofill(7,0)).toEqual(7);
  });
});
