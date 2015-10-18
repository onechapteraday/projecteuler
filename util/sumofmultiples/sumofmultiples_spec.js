describe('Multiples of x below limit function', function(){
  it('gives 1683 as the sum of the multiples of 3 below 100', function(){
    expect(sumofmultiples(3,100)).toEqual(1683);
  });

  it('gives 166883 as the sum of the multiples of 3 below 1000', function(){
    expect(sumofmultiples(3,1000)).toEqual(166833);
  });

  it('gives 99500 as the sum of the multiples of 5 below 1000', function(){
    expect(sumofmultiples(5,1000)).toEqual(99500);
  });

  it('gives 6321 as the sum of the multiples of 7 below 300', function(){
    expect(sumofmultiples(7,300)).toEqual(6321);
  });

  it('gives 33165 as the sum of the multiples of 15 below 1000', function(){
    expect(sumofmultiples(15,1000)).toEqual(33165);
  });

  it('gives 2333316668 as the sum of the multiples of 3 and 5 below 100000', function(){
    expect(sumofmultiples(3,100000) + sumofmultiples(5,100000) - sumofmultiples(15,100000)).toEqual(2333316668);
  });
});
