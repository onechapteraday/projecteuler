/* The number 145 is well known for the property that the sum of the factorial of
 * its digits is equal to 145:
 * 
 * 1! + 4! + 5! = 1 + 24 + 120 = 145
 * 
 * Perhaps less well known is 169, in that it produces the longest chain of numbers
 * that link back to 169; it turns out that there are only three such loops that
 * exist:
 * 
 * 169 -> 363601 -> 1454 -> 169
 * 871 -> 45361 -> 871
 * 872 -> 45362 -> 872
 * 
 * It is not difficult to prove that EVERY starting number will eventually get stuck
 * in a loop. For example,
 * 
 * 69 -> 363600 -> 1454 -> 169 -> 363601 (-> 1454)
 * 78 -> 45360 -> 871 -> 45361 (-> 871)
 * 540 -> 145 (-> 145)
 * 
 * Starting with 69 produces a chain of five non-repeating terms, but the longest
 * non-repeating chain with a starting number below one million is sixty terms.
 * How many chains, with a starting number below one million, contain exactly sixty
 * non-repeating terms? */

function prb74(){
  var limit = 1000000,
      count = 0;
  for(var i=1; i<=limit; i++){
    var temp = i,
        found = false,
	arr = [i];
    while(!found && arr.length<61){
      var result = 0;
      // find new number
      while(!(temp%10==0 && Math.floor(temp/10)==0)){
        var test = temp%10;
        temp = Math.floor(temp/10);
        result += factorial(test);
      }
      // check if new number is already in the array
      for(var j=0; j < arr.length; j++){
        if(result==arr[j]){
          found = true;
          break;
        }
      }
      // if not in array, update temp
      if(!found) arr.push(result);
      temp = result;
    }
    if(arr.length==60){
      count++;
    }
  }
  return count;
}
