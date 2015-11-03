/* It was proposed by Christian Goldbach that every odd composite number can be
 * written as the sum of a prime and twice a square.
 * 9 = 7 + 2x12
 * 15 = 7 + 2x22
 * 21 = 3 + 2x32
 * 25 = 7 + 2x32
 * 27 = 19 + 2x22
 * 33 = 31 + 2x12
 * It turns out that the conjecture was false.
 * What is the smallest odd composite that cannot be written as the sum of a prime
 * and twice a square? */

function prb46(){
  var solution = 0;
  for(var x = 9; x < 9999; x+=2){
    if(!isprime(x)){
      var found = false;
      for(var s = 0; s < Math.sqrt(x/2); s++){
        if(isprime(x-2*s*s)){
          found = true;
          break;
        }
      }
      if(!found) {
        solution = x;
        break;
      }
    }
  }
  return solution;
}
