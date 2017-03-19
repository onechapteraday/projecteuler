describe("Problem #99 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/099/p099_base_exp.txt', function(data){
      var grid = data.split('\n').map(x => x.split(','));
      grid.pop();
      for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[i].length; j++){
          grid[i][j] = parseInt(grid[i][j]);
        }
      }

      expect(prb99(grid)).toEqual(709);
      done();
    });
  });
});
