/* Check if two numbers have the same digit. */

function commondigit(a,b) {
  var aa = a.toString()[0],
      ab = a.toString()[1],
      ba = b.toString()[0],
      bb = b.toString()[1];
  if(aa==ba||aa==bb) return aa;
  else if(ab==ba||ab==bb) return ab;
  else '';
}
