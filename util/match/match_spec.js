describe('Match function', function(){
  it('should return [1234,2345,2346] for match [123,234],[123,234,345,456,346]', function(){
    expect(match([123,234],[123,234,345,456,346])).toEqual(['1234','2345','2346']);
  });
});
