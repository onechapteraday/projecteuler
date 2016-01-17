/* Pow function for LargeNumbers */

function pow(n,k){
  if(k==0){
    return [1];
  }
  if(k&1){
    return multiplication(pow(n,k-1),n);
  }
  else {
    var p = pow(n,k/2);
    return multiplication(p, p);
  }
}
