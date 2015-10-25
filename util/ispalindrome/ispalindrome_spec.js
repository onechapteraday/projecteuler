describe('The palindrome function', function(){
  var a = 13731,
      b = 2442,
      c = 632,
      d = 5001;

  it('checks if numbers are palindromes', function(){
    expect(ispalindrome(a,10)).toBe(true);
    expect(ispalindrome(b,10)).toBe(true);
    expect(ispalindrome(c,10)).not.toBe(true);
    expect(ispalindrome(d,10)).not.toBe(true);
  });
});
