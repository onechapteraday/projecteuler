/* A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order. The
 * lexicographic permutations of 0, 1 and 2 are:
 * 012   021   102   120   201   210
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5,
 * 6, 7, 8 and 9? */

function prb24(){
  var sum = 0,
      result = '',
      a = [0,1,2,3,4,5,6,7,8,9];

  for(var i = 10; i > 0; i--){
    var nbperms = factorial(i),
        parts = nbperms / i,
	j = 0;

    while(sum < 1000000){
      sum += parts;
      j++;
    }

    j -= 1;
    sum -= parts;
    result = result.concat(a.splice(j,1));
  }

  return parseInt(result);
}
