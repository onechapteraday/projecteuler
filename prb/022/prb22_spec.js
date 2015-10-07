describe("Problem #22 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/022/names.txt', function(data){
      expect(prb22(data)).toEqual(871198282);
      done();
    });
  });
});
