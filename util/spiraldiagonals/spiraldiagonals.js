/**/

function spiraldiagonals(n){
  if(n==1)
    return 1;
  else{
    var sum = Math.pow(n,2) + (Math.pow(n,2)-n+1) + (Math.pow(n,2)-2*n+2) + (Math.pow(n,2)-3*n+3);
    n -= 2;
    return sum + spiraldiagonals(n);
  }
}
