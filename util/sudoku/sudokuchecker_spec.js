describe('Sudoku checker function', function(){
   var wrong_length = [[1,2,3,4,5,6,7,8,9],
                       [9,4,3,5,6,7,2,1,8]];

  var wrong_rows_length = [[1,2,3,4,5,6,7,8,9],
                           [4,5,6,1,8,7,2,3,2],
    	                   [7,8,9,1,2,3,4,5,6],
    	                   [3,4,2,7,8,9,1,2,3],
    	                   [9,8,1,2,3,5,6,4],
    	                   [6,7,1,4,5,6,7,9,8],
    	                   [8,3,4,1,2,3,4,5,6],
    	                   [2,1,7,4,5,6,8,7,9],
    	                   [9,6,5,7,9,8,3,1,2]];


     var wrong_rows = [[1,2,3,4,5,6,7,8,9],
                       [4,5,6,1,8,7,2,3,2],
    	               [7,8,9,1,2,3,4,5,6],
    	               [3,4,2,7,8,9,1,2,3],
    	               [5,9,8,1,2,3,5,6,4],
    	               [6,7,1,4,5,6,7,9,8],
    	               [8,3,4,1,2,3,4,5,6],
    	               [2,1,7,4,5,6,8,7,9],
    	               [9,6,5,7,9,8,3,1,2]];

  var wrong_columns = [[1,2,3,4,5,6,7,8,9],
                       [4,5,6,7,8,9,2,3,1],
    	               [7,8,9,1,2,3,4,5,6],
    	               [4,5,6,7,8,9,1,2,3],
    	               [7,8,9,1,2,3,5,6,4],
    	               [2,3,1,4,5,6,7,9,8],
    	               [8,7,9,1,2,3,4,5,6],
    	               [3,2,1,4,5,6,8,7,9],
    	               [5,4,6,7,9,8,3,1,2]];

  var wrong_squares = [[1,2,3,4,5,6,7,8,9],
                       [2,3,4,5,6,7,8,9,1],
    	               [3,4,5,6,7,8,9,1,2],
    	               [4,5,6,7,8,9,1,2,3],
    	               [5,6,7,8,9,1,2,3,4],
    	               [6,7,8,9,1,2,3,4,5],
    	               [7,8,9,1,2,3,4,5,6],
    	               [8,9,1,2,3,4,5,6,7],
    	               [9,1,2,3,4,5,6,7,8]];

          var valid = [[5,3,4,6,7,8,9,1,2],
                       [6,7,2,1,9,5,3,4,8],
  	               [1,9,8,3,4,2,5,6,7],
  	               [8,5,9,7,6,1,4,2,3],
  	               [4,2,6,8,5,3,7,9,1],
  	               [7,1,3,9,2,4,8,5,6],
  	               [9,6,1,5,3,7,2,8,4],
  	               [2,8,7,4,1,9,6,3,5],
  	               [3,4,5,2,8,6,1,7,9]];
	     
  it('should not consider wrong_length array as a sudoku', function(){
    expect(sudokuchecker(wrong_length)).toBeFalsy();
  });

  it('should not consider wrong_rows_length array as a sudoku', function(){
    expect(sudokuchecker(wrong_rows_length)).toBeFalsy();
  });

  it('should not consider wrong_rows array as a sudoku', function(){
    expect(sudokuchecker(wrong_rows)).toBeFalsy();
  });

  it('should not consider wrong_columns array as a sudoku', function(){
    expect(sudokuchecker(wrong_columns)).toBeFalsy();
  });

  it('should not consider wrong_squares array as a sudoku', function(){
    expect(sudokuchecker(wrong_squares)).toBeFalsy();
  });

  it('should consider valid array as a sudoku', function(){
    expect(sudokuchecker(valid)).toBeTruthy();
  });

  //it('finds the correct result for n=12 and k=2 * n=14 and k=1', function(){
  //  expect(binomial(12,2)*binomial(14,1)).toEqual(924);
  //});
});
