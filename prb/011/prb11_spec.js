describe("Asynchronous spec", function() {
  console.log = jasmine.createSpy('log');
  prb11();

  it("finds the correct result", function(done) {
    setTimeout(function() {
      done();
    }, 0);
    expect(console.log).toHaveBeenCalledWith(70600674);
  });
});
