describe('How many ways function', function(){
  it('gives 6 ways to make change for 15 cents', function(){
    expect(howmanyways([25,10,5,1],15)).toEqual(6);
  });

  it('gives 242 ways to make change for $1', function(){
    expect(howmanyways([25,10,5,1],100)).toEqual(242);
  });

  it('gives 142511 ways to make change for $10', function(){
    expect(howmanyways([25,10,5,1],1000)).toEqual(142511);
  });

  it('gives 4371565890901 ways to make change for $200', function(){
    expect(howmanyways([100,50,25,10,5,1],20000)).toEqual(4371565890901);
  });

  it('gives 1045248220992701 ways to make change for $600', function(){
    expect(howmanyways([100,50,25,10,5,1],60000)).toEqual(1045248220992701);
  });

  it('gives 4395748062203601 ways to make change for $800', function(){
    expect(howmanyways([100,50,25,10,5,1],80000)).toEqual(4395748062203601);
  });

  it('gives 4563 ways to make change for 1 pound', function(){
    expect(howmanyways([200,100,50,20,10,5,2,1],100)).toEqual(4563);
  });

  it('gives 321335886 ways to make change for 10 pounds', function(){
    expect(howmanyways([200,100,50,20,10,5,2,1],1000)).toEqual(321335886);
  });
});
