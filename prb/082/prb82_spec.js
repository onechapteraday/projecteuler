describe("Problem #82 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/082/p082_matrix.txt', function(data){
      expect(prb82(data)).toEqual(true);
      done();
    });
  });
});
