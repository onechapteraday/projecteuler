describe('Isprime function', function(){
  var a = [2,3,5,7,11,13,17,19,23,29];

  it('should return true for small primes', function(){
    for(var i = 0; i < a.length; i++){
      expect(isprime(a[i])).toBe(true);
    }
  });

  it('should return false for non primes', function(){
    expect(isprime(12)).toBeFalsy();
    expect(isprime(25)).toBe(false);
    expect(isprime(27)).not.toBeTruthy();
  });
 
  it('should return the correct result for these big primes', function(){
    expect(isprime(956987)).toBeTruthy();
    expect(isprime(123214741)).toBeFalsy();
  });

  it('should return the correct result for negative primes', function(){
    expect(isprime(-13)).not.toBe(true);
    expect(isprime(-123214741)).toBeFalsy();
  });
});
