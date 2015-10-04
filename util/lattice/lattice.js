/* A path composed of connected horizontal and vertical line segments, each passing 
 * between adjacent lattice points. A lattice path is therefore a sequence of 
 * points P_0, P_1, ..., P_n with n>=0 such that each P_i is a lattice point and 
 * P_(i+1) is obtained by offsetting one unit east (or west) or one unit north (or 
 * south). */

function lattice(x,y){
  return binomial(x+y, y);
}
