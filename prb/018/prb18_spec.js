describe("Problem #18 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/018/prb18.txt', function(data){
      expect(prb18(data)).toEqual(1074);
      done();
    });
  });
});
