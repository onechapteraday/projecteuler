/* The cube, 41063625 (345^3), can be permuted to produce two other cubes:
 * 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube
 * which has exactly three permutations of its digits which are also cube.
 * Find the smallest cube for which exactly five permutations of its digits are
 * cube. */

function prb62(){
  var found = 0,
      limit = 8400;
  for(var i = 5000; i < limit; i++){
    var a = i*i*i;
    for(var j = i+1; j < limit; j++){
      var b = j*j*j;
      if(ispermutation(a,b)){
        for(var k = j+1; k < limit; k++){
          var c = k*k*k;
          if(ispermutation(b,c)){
            for(var l = k+1; l < limit; l++){
              var d = l*l*l;
              if(ispermutation(c,d)){
                for(var m = l+1; m < limit; m++){
                  var e = m*m*m;
                  if(ispermutation(d,e)){
                    found = i*i*i;
                    break;
                  }
                }
              }
              if(found>0) break;
            }
          }
          if(found>0) break;
        }
      }
      if(found>0) break;
    }
    if(found>0) break;
  }
  return found;
}
