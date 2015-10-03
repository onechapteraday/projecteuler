describe("Problem #8 function", function() {
  it("finds the correct result", function() {
    readFile('prb8.txt', function(data){
      expect(prb8(data)).toEqual(23514624000);
      done();
    });
  });
});
