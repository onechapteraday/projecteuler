/* The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143? */

function prb3(){
  var x = 600851475143,
      largest = 1,
      k = 3;
  if(x % 2 == 0){
    x = x / 2;
    largest = 2;
    while(x % 2 == 0) x = x / 2;
  }
  while(x > 1 && k <= Math.sqrt(x)){
    if(x % k == 0){
      largest = k;
      x = x / k;
      while(x % k == 0) x = x / k;
    }
    k += 2;
  }
  if(x == 1) return largest;
  else return x;
}
