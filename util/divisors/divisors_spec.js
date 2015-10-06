describe('Number of divisors function', function(){
  it('should find 6 divisors for 12', function(){
    expect(divisors(12)).toEqual([1,2,3,4,6,12]);
  });

  it('should find 5 divisors for 16', function(){
    expect(divisors(16)).toEqual([1,2,4,8,16]);
  });

  it('should find 8 divisors for 2*7*19', function(){
    expect(divisors(2*7*19)).toEqual([1,2,7,14,19,38,133,266]);
  });

  it('should find 4 divisors for 123', function(){
    expect(divisors(123)).toEqual([1,3,41,123]);
  });

  it('should find 14 divisors for 1472', function(){
    expect(divisors(1472)).toEqual([1,2,4,8,16,23,32,46,64,92,184,368,736,1472]);
  });

  it('should find 48 divisors for 4200', function(){
    expect(divisors(4200)).toEqual([1,2,3,4,5,6,7,8,10,12,14,15,20,21,24,25,28,30,35,40,42,50,56,60,70,75,84,100,105,120,140,150,168,175,200,210,280,300,350,420,525,600,700,840,1050,1400,2100,4200]);
  });

  it('should find 12 divisors for 16151844', function(){
    expect(divisors(16151844)).toEqual([1,2,3,4,6,12,1345987,2691974,4037961,5383948,8075922,16151844]);
  });

  it('should find 4 divisors for 1262210962', function(){
    expect(divisors(1262210962)).toEqual([1,2,631105481,1262210962]);
  });
});
