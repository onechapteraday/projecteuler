/* Consider quadratic Diophantine equations of the form:
 * 
 * x^2 - Dy^2 = 1
 * 
 * For example, when D=13, the minimal solution in x is 649^2 - 13×180^2 = 1.
 * It can be assumed that there are no solutions in positive integers when D is
 * square.
 * By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the
 * following:
 * 
 * 3^2 - 2x2^2 = 1
 * 2^2 - 3x1^2 = 1
 * 9^2 - 5x4^2 = 1
 * 5^2 - 6x2^2 = 1
 * 8^2 - 7x3^2 = 1
 * 
 * Hence, by considering minimal solutions in x for D = 7, the largest x is obtained
 * when D=5.
 * Find the value of D = 1000 in minimal solutions of x for which the largest value
 * of x is obtained. */
 
function issquare(n){
  return (Math.sqrt(n)%1==0);
}

function prb66(){
  var value = '0',
      max = 0;
  for(var D = 2; D <= 2; D++){
    if(issquare(D)) continue;

    var limit = new LargeNumber([Math.sqrt(D)]);
    
    var a0 = limit,
        m = new LargeNumber([0]),
        d = new LargeNumber([1]),
        a = limit;
 
    var num = new LargeNumber(a.getArray()),
        num0 = new LargeNumber([1]),
        den = new LargeNumber([1]),
        den0 = new LargeNumber([0]);

    var temp = new LargeNumber();
    temp.setArray( subtraction( multiplication(num.getArray(),num.getArray()) ,
      multiplication([D], multiplication(den.getArray(),den.getArray()))  ));

    var i = 0;

    while(temp != [1] && i < 6){
      m.setArray( subtraction( multiplication(d.getArray(),a.getArray()), m.getArray() )); 
      d.setArray( division( subtraction( [D], multiplication(m.getArray(),m.getArray())), d.getArray() ));
      a.setArray( division( addition( a0.getArray(), m.getArray()), d.getArray() ));

      var num1 = num0,
          den1 = den0;

      num0 = num;
      den0 = den;
       
      num.setArray( addition(multiplication(a.getArray(),num0.getArray()), num1.getArray()) );
      den.setArray( addition(multiplication(a.getArray(),den0.getArray()), den1.getArray()) );
      
      temp.setArray( subtraction( multiplication(num.getArray(),num.getArray()) ,
        multiplication([D], multiplication(den.getArray(),den.getArray()))  ));
      i++;
    }
  }
  return max;
}
