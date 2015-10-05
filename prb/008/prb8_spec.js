describe("Problem #8 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/008/prb8.txt', function(data){
      expect(prb8(data)).toEqual(23514624000);
      done();
    });
  });
});
