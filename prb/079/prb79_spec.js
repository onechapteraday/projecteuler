describe("Problem #79 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/079/p079_keylog.txt', function(data){
      expect(prb79(data)).toEqual(73162890);
      done();
    });
  });
});
