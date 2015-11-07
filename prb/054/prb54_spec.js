describe("Problem #54 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/054/poker.txt', function(data){
      expect(prb54(data)).toEqual(376);
      done();
    });
  });
});
