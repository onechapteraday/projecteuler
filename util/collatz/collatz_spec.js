describe('Chain length of  Collatz function', function(){
  it('finds the correct result for 6', function(){
    expect(collatz(6)).toEqual(9);
  });

  it('finds the correct result for 19', function(){
    expect(collatz(19)).toEqual(21);
  });

  it('finds the correct result for 27', function(){
    expect(collatz(27)).toEqual(112);
  });

  it('finds the correct result for 63728127', function(){
    expect(collatz(63728127)).toEqual(950);
  });
});
