describe("Problem #59 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/059/p059_cipher.txt', function(data){
      expect(prb59(data)).toEqual(107359);
      done();
    });
  });
});
