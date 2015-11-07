describe('Let\'s play poker! functions', function(){
  var hand = ['6C','4D','3H','2C','5S'];

  it('should reorder cards according to values', function(){
    sortcards(hand);
    expect(hand).toEqual(['2C','3H','4D','5S','6C']);
  });

  it('should consider <hand> as straight, but not straight flush', function(){
    expect(isstraight(hand)).toBe(true);
    expect(isstraightflush(hand)).toBe(false);
  });
});
