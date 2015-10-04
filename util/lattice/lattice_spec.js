describe('The lattice path function', function(){
  it('finds the correct result for lattice 1,1', function(){
    expect(lattice(1,1)).toEqual(2);
  });

  it('finds the correct result for lattice 2,2', function(){
    expect(lattice(2,2)).toEqual(6);
  });

  it('finds the correct result for lattice 3,3', function(){
    expect(lattice(3,3)).toEqual(20);
  });

  it('finds the correct result for lattice 4,4', function(){
    expect(lattice(4,4)).toEqual(70);
  });
});
