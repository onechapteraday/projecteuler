/* In mathematics, a pair of amicable numbers is a pair of positive integers in 
 * which each member is equal to the sum of the submultiples of the other, as 220 
 * and 284. */

function amicable(x,y){
  var xsum = 0,
      ysum = 0,
      xdiv = divisors(x),
      ydiv = divisors(y);
  for(var i = 0; i < xdiv.length-1; i++)
    xsum += xdiv[i];
  for(var i = 0; i < ydiv.length-1; i++)
    ysum += ydiv[i];
  if(xsum == y && ysum == x) return true;
  else return false;
}
