describe('Problem #4 function', function(){
  it('finds a palindrome', function(){
    expect(ispalindrome(prb4())).toBe(true);
  });

  it('finds the correct result', function(){
    expect(prb4()).toEqual(906609);
  });
});
