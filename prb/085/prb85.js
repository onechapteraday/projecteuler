/* By counting carefully it can be seen that a rectangular grid measuring 3 by 2
 * contains eighteen rectangles:
 *
 * --····    ----··    ------
 * --····    ----··    ------
 * ······    ······    ······
 *   6         4         2
 *
 * --····    ----··    ------
 * --····    -  -··    -    -
 * --····    ----··    ------
 *   3         2         1
 *
 * Although there exists no rectangular grid that contains exactly two million
 * rectangles, find the area of the grid with the nearest solution. */

function rects_in_grid(m, n) {
  // Assuming we have a rectangular grid n x m
  // m x (m+1) / 2 x n x (n+1) / 2 is the formula
  // to find the number of rectangles in the grid
  return m * (m + 1) / 2 * n * (n + 1) /2;
}

function prb85(){
  var target = 2000000,
      result = 0,
      mprime = 0,
      nprime = 0,
      max = 1000;

  for(var m = 1; m < max; m++) {
    for(var n = 1; n < max; n++) {
      var value = rects_in_grid(m,n);

      if(value > target)
        break;

      if(value > result) {
        result = value;
        mprime = m;
        nprime = n;
      }
    }
  }

  return mprime * nprime;
}
