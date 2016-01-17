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
	limit = 100,
	test = new LargeNumber();

    // test = 10 * Math.pow(10,limit+1);
    test.setArray(multiplication([10], pow([10],limit+1)));

    // while(b<test)
    while( b.getValue().length < test.getValue().length ||
           (b.getValue().length == test.getValue().length && b.getValue() < test.getValue()) ){
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
        b.setArray( addition(multiplication(division(b.getArray(),[10]), [100]), [5]));
      }
    }
    // Math.floor(b/100); without first digit
    var l = b.getValue().length;
    return b.getValue().substring(0,l-3);
  }

  // display the first 100 numbers after the decimal of sqrt(2);
  var tab = sq(2).split('').map(x => parseInt(x));
  return tab.sum();
}
