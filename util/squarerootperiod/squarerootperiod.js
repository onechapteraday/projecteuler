/* Every square root, which is not a perfect square root, has a continued fractions
 * that ends up as a repeating patterns. This algorithm gives how many digits have
 * this repeating pattern, called a period. */

function sqrtperiod(n){
  if(Math.sqrt(n)%1==0)
    return 0;

  var a0 = Math.floor(Math.sqrt(n)),
      m = 0,
      d = 1,
      a = a0,
      i = 0;

  while(a != 2 * a0){
    m = d*a-m;
    d = (n-m*m)/d;
    a = Math.floor((a0 + m)/d);
    i++;
  }

  return i;
}

function sqrtsequence(n){
  if(Math.sqrt(n)%1==0)
    return 0;

  var a0 = Math.floor(Math.sqrt(n)),
      m = 0,
      d = 1,
      a = a0,
      tab = [];

  while(a != 2 * a0){
    m = d*a-m;
    d = (n-m*m)/d;
    a = Math.floor((a0 + m)/d);
    tab.push(a);
  }

  return tab;
}
