describe("Problem #13 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/013/prb13.txt', function(data){
      expect(prb13(data)).toEqual(5537376230);
      done();
    });
  });
});
