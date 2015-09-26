describe('The palindrome function', function(){
  var a = 13731,
      b = 2442,
      c = 632,
      d = 5001;

  it('checks if numbers are palindromes', function(){
    expect(ispalindrome(a)).toBe(true);
    expect(ispalindrome(b)).toBe(true);
    expect(ispalindrome(c)).not.toBe(true);
    expect(ispalindrome(d)).not.toBe(true);
  });
});
