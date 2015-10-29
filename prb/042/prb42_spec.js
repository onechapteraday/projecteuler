describe("Problem #42 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/042/p042_words.txt', function(data){
      expect(prb42(data)).toEqual(162);
      done();
    });
  });
});
