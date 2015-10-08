describe("Readfile function", function() {
  it("can read information from files", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/util/readfile/read.txt', function(data){
      expect(data).toContain('Lorem ipsum');
      expect(data).not.toContain('Hello world');
      done();
    });
  });
});
