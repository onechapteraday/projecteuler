describe("Problem #13 function", function() {
  it("finds the correct result", function(done) {
    readFile('prb13.txt', function(data){
      expect(prb13(data)).toEqual(5537376230);
      done();
    });
  });
});
