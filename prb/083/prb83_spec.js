describe("Problem #83 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/083/p083_matrix.txt', function(data){
      expect(prb83(data)).toEqual(true);
      done();
    });
  });
});
