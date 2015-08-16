describe('Sieve of Eratosthenes array under 100', function(){
  var primes = eratosthenes(100);

  it('is truthy', function(){
    expect(primes).toBeTruthy();
  });

  it('is really an array', function(){
    expect(Array.isArray(primes)).toBe(true);
  });

  it('has 25 primes under 100', function(){
    expect(primes.length).toEqual(25);
  });

  it('contains 5, 11, 43, 97 as primes', function(){
    expect(primes).toContain(5);
    expect(primes).toContain(11);
    expect(primes).toContain(43);
    expect(primes).toContain(97);
  });

  it('does not contain 28, 60, 99', function(){
    expect(primes).not.toContain(28);
    expect(primes).not.toContain(60);
    expect(primes).not.toContain(99);
  });
});
