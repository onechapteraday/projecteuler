/* In computer science, a binary search or half-interval search algorithm finds the
 * position of a target value within a sorted array. The binary search algorithm 
 * can be classified as a dichotomic divide-and-conquer search algorithm and 
 * executes in logarithmic time. */

function binarysearch(arr, x){
  var min = 0,
      max = arr.length-1,
      guess;

  while(min <= max){
    guess = ((max+min) >>> 1);

    if(x === arr[guess])
      return guess;

    else if(x < arr[guess])
      max = guess - 1 ;

    else
      min = guess + 1;
  }

  return -1;
}
