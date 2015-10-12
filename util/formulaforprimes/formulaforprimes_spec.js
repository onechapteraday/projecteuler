describe('Formula for primes functions', function(){
  it('expects Euler quadractic formula to return only primes', function(){
    for(var n = 0; n < 39; n++){
      expect(isprime(eulerquadratic(n,1,41))).toBe(true);
    }
  });
});
