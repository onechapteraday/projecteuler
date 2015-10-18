/**/

function sumofmultiples(x,below){
  var limit = below - 1,
      target = limit - (limit%x),
      n = target/x;
  return x*(n*(n+1))/2;
}
