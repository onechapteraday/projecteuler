describe("Problem #81 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/081/p081_matrix.txt', function(data){
      expect(prb81(data)).toEqual(427337);
      done();
    });
  });
});
