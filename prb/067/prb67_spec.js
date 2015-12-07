describe("Problem #67 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/067/p067_triangle.txt', function(data){
      expect(prb67(data)).toEqual(7273);
      done();
    });
  });
});
