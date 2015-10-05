describe("Problem #11 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/011/prb11.txt', function(data){
      expect(prb11(data)).toEqual(70600674);
      done();
    });
  });
});
