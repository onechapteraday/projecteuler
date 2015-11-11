/* Gives the number of right triangles with perimeter p.
 * a^2 + b^2 = c^2
 * a + b + c = p
 * so ...
 * a^2 + b^2 = (p-a-b)^2 = p^2 + a^2 + b^2 - 2pa - 2pb + 2ab
 * b = (p^2-2pa) / (2p-2a)
 * so if this equation is an integer, we found a right triangle!
 * also, a+b>c, values of a should be investiguate until a = p/2+sqrt(2) */

function righttriangle(p){
  var howmany = 0;
  for(var a = 3; a < p/(2+Math.sqrt(2)); a++){
    if((p*(p-2*a)) % (2*(p-a)) == 0){
      howmany++;
    }
  }
  return howmany;
}
