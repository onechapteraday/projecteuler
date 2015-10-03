describe("Problem #11 function", function() {
  it("finds the correct result", function(done) {
    readFile('prb11.txt', function(data){
      expect(prb11(data)).toEqual(70600674);
      done();
    });
  });
});
