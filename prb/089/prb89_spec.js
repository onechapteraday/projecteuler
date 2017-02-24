describe("Problem #89 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/089/p089_roman.txt', function(data){
      expect(prb89(data)).toEqual(true);
      done();
    });
  });
});

