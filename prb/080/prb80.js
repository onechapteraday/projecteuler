/* It is well known that if the square root of a natural number is not an integer,
 * then it is irrational. The decimal expansion of such square roots is infinite
 * without any repeating pattern at all.
 * The square root of two is 1.41421356237309504880..., and the digital sum of the
 * first one hundred decimal digits is 475.
 * For the first one hundred natural numbers, find the total of the digital sums of
 * the first one hundred decimal digits for all the irrational square roots. */

function prb80(){
  // http://www.afjarvis.staff.shef.ac.uk/maths/jarvisspec02.pdf
  var sq = function(n){
    var a = new LargeNumber([5*n]),
        b = new LargeNumber([5]),
	limit = 99,
	test = new LargeNumber();

    // test = 10 * Math.pow(10,limit+1);
    test.setArray(multiplication([10], pow([10],limit+1)));
    var value = test.getValue();

    // while(b<test)
    while( b.getValue().length < value.length ||
           (b.getValue().length == value.length && b.getValue() < value) ){
      // if(a >= b)
      if( a.getValue().length > b.getValue().length ||
          (a.getValue().length == b.getValue().length && a.getValue() >= b.getValue()) ){
        // a -= b;
	a.setArray(subtraction(a.getArray(),b.getArray()));
	// b += 10;
        b.setArray(addition(b.getArray(),[10]));
      }
      // if(a < b)
      if( a.getValue().length < b.getValue().length ||
          (a.getValue().length == b.getValue().length && a.getValue() < b.getValue())) {
        // a *= 100;
        a.setArray(multiplication(a.getArray(), [100]));
	// b += Math.floor(b/10) * 100 + 5;
	var b_v = b.getValue(),
	    b_l = b_v.length;
        b.setValue(b_v.substr(0,b_l-1)+'0'+b_v.substr(b_l-1,1));
      }
    }
    // Math.floor(b/100);
    var l = b.getValue().length;
    return b.getValue().substring(0,l-2);
  }

  // display the first 100 numbers of sqrt(n);
  var sum = 0;
  for(var n = 2; n < 100; n++){
    if(Math.sqrt(n)%1==0) continue;
    var tab = sq(n).split('').map(x => parseInt(x));
    sum += tab.sum();
  }

  return sum;
}
