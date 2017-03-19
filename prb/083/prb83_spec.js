xdescribe('Problem #83 given example function', function(){
  var grid = [[131, 673, 234, 103,  18],
              [201,  96, 342, 965, 150],
              [630, 803, 746, 422, 111],
              [537, 699, 497, 121, 956],
              [805, 732, 524,  37, 331]];

  it('finds the correct result', function(){
    expect(prb83(grid)).toEqual(2297);
  });
});

describe("Problem #83 function", function() {
  it("finds the correct result", function(done) {
    readFile('https://raw.githubusercontent.com/christellehilaricus/projecteuler/master/prb/083/p083_matrix.txt', function(data){
      var grid = data.split('\n').map(x => x.split(','));
      grid.pop();
      for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[i].length; j++){
          grid[i][j] = parseInt(grid[i][j]);
        }
      }

      expect(prb83(grid)).toEqual(425185);
      done();
    });
  });
});
