/* Gives the number of right triangles with perimeter p. */

function righttriangle(p){
  var howmany = 0;
  for(var a = 1; a < p; a++ ){
    for(var b = a; b < p; b++){
      if(a+b < 1000){
        var c = p - a - b;
        if(a*a + b*b == c*c){
          howmany++;
        }
      } else break;
    }
  }
  return howmany;
}
