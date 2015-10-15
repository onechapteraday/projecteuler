describe('The factorial function in recursive way', function(){
  it('should return undefined for negative number', function(){
    expect(factorial(Math.floor(Math.random()*501) - 500)).toBeUndefined();
  });

  it('finds the correct result for 0!', function(){
    expect(factorial(0)).toEqual(1);
  });

  it('finds the correct result for 5!', function(){
    expect(factorial(5)).toEqual(120);
  });

  it('finds the correct result for 9!', function(){
    expect(factorial(9)).toEqual(362880);
  });

  it('finds the correct result for 13!', function(){
    expect(factorial(13)).toEqual(6227020800);
  });

  it('finds the correct result for 18!', function(){
    expect(factorial(18)).toEqual(6402373705728000);
  });

  it('finds the correct result for 20!', function(){
    expect(factorial(20)).toEqual(2432902008176640000);
  });

  it('finds the correct result for 25!', function(){
    expect(factorial(25)).toEqual(15511210043330985984000000);
  });

  it('finds the correct result for 32!', function(){
    expect(factorial(32)).toEqual(263130836933693530167218012160000000);
  });

  it('finds the correct result for 40!', function(){
    expect(factorial(40)).toEqual(815915283247897734345611269596115894272000000000);
  });

  it('finds the correct result for 42!', function(){
    expect(factorialLarge('42')).toEqual('1405006117752879898543142606244511569936384000000000');
  });

  it('finds the correct approximation for 42!', function(){
    expect(factorial(42).toPrecision(15)).toEqual((1405006117752879898543142606244511569936384000000000).toPrecision(15));
  });
});
