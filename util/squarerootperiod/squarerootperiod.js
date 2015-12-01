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

function sqrt(n){
  var n_ = new LargeNumber([n]);
  var r = new LargeNumber([1]);
  // r = n/2;
  r.setArray( division(n_.getArray(),new LargeNumber([2]).getArray()) );
  for ( var i = 0; i < 10; i++ ) {
    // r = (r+n/r)/2;
    r.setArray( division(addition(r.getArray(),division(n_.getArray(),r.getArray())), [2]) );
  }
  return r.getValue();
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
