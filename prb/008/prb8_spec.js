describe("Do asynchronous spec to check problem #8", function() {
  // Spy on console.log
  console.log = jasmine.createSpy('log');
  prb8();

  it("finds the correct result", function(done) {
    // Do setTimeout just to wait the function to be done
    setTimeout(function() {
      done();
    }, 0);
    // Check console.log with result
    expect(console.log).toHaveBeenCalledWith(23514624000);
  });
});
