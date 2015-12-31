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

function primitiveTriple(limit){
  var p = 1,
      primitiveTriples = new Array();
  for (var m = 1; m < 2000; m++){
    if(p > limit * 2){
       break;
    }
    for(var n = 1; n < m; n++){
      if(gcd(m, n) != 1){
        continue;
      }
      if ((m%2 ==1) && (n%2 ==1)){
        continue;
      }else{
        var x = 2*m*n,
            y = m*m - n*n,
            z = m*n + n*n,
            b = Math.min(x,y),
            a = Math.max(x,y),
            p = x + y + z;
        if(p <= limit){
          primitiveTriples.push([p, b, a, z]);
        }
      }
    }
  }
  return primitiveTriples;
}
