/* Let p(n) represent the number of different ways in which n coins can be
 * separated into piles. For example, five coins can be separated into piles in
 * exactly seven different ways, so p(5)=7.
 * OOOOO
 * OOOO O
 * OOO OO
 * OOO O O
 * OO OO O
 * OO O O O
 * O O O O O
 * Find the least value of n for which p(n) is divisible by one million. */

function prb78(){
  // recurrence and partition:
  // http://www.numbertheory.org/php/partition.html
  var p = [],
      limit = 100;
  p[0] = 1;
  for(var i = 1; i <= limit; i++){
    var j = 1,
        k = 1,
	s = 0;
    while(j>0){
      j = i-(3*k*k+k)/2;
      if(j >= 0)
        s = s - Math.pow(-1,k)*p[j];
      j = i-(3*k*k-k)/2;
      if(j >= 0)
        s = s - Math.pow(-1,k)*p[j];
      k++;
    }
    p[i] = s;
  }
  console.log(p);
  return true;
}
