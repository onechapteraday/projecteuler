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
  for(var D = 2; D <= 6; D++){
    if(issquare(D)) continue;
    for(var y = new LargeNumber([1]); ; y.setArray(addition(y.getArray(),[1]))){
      var found = false;

      // Square root continued fraction variables
      var a0 = new LargeNumber(sqrt(D)),
          m = new LargeNumber(['0']),
          d = new LargeNumber(['1']),
          a = new LargeNumber(a0.getArray()),
          tab = [];

      // Convergent variables
      var numm1 = new LargeNumber([1]),
          num = new LargeNumber(a.getArray()),
          denm1 = new LargeNumber([0]),
          den = new LargeNumber([1]);

      // a0 * 2 value
      var a0x2 = new LargeNumber();
      a0x2.setArray(multiplication([2],a0.getArray()));

      // Since only absolute values are used, subtraction can be done
      // without worrying about the order of the parameters...
      // ...but I'll have to find a way to do the correct operation with
      // previous parameters signs
      while(!found){
        var m_sign = 0;

        // m = d*a-m;
        var dxa = new LargeNumber(multiplication(d.getArray(),a.getArray()));
        if( subtraction(dxa.getArray(),m.getArray()) == undefined){
          m.setArray( subtraction(m.getArray(),dxa.getArray()) );
          m_sign = 1;
        } else
          m.setArray( subtraction(dxa.getArray(),m.getArray()) );

        // d = (n-m*m)/d;
        var mxm = new LargeNumber(multiplication(m.getArray(),m.getArray()));
        if(subtraction([D],mxm.getArray()) == undefined)
          d.setArray(division( subtraction(mxm.getArray(),[D]) , d.getArray()));
        else
          d.setArray(division( subtraction([D],mxm.getArray()) , d.getArray()));

        // a = Math.floor((a0 + m)/d);
        if(m_sign == 1){
          if(m.length < a0.length || (m.length==a0.length && m.getValue() < a0.getValue)){
            a.setArray(division( subtraction(a0.getArray(), m.getArray()) , d.getArray()));
          } else {
            a.setArray(division( subtraction(m.getArray(), a0.getArray()) , d.getArray()));
          }
        } else
          a.setArray(division( addition(a0.getArray(), m.getArray()) , d.getArray()));

        tab.push(a.getValue());

        // Give the next convergent
        var numm2 = new LargeNumber(numm1.getArray());
        var denm2 = new LargeNumber(denm1.getArray());
        numm1.setArray( num.getArray() );
        denm1.setArray( den.getArray() );

        // num = a*numm1 + numm2;
        num.setArray( addition(multiplication(a.getArray(),numm1.getArray()), numm2.getArray()) );
        // den = a*denm1 + denm2;
        den.setArray( addition(multiplication(a.getArray(),denm1.getArray()), denm2.getArray()) );
        // num * num
        var numxnum = new LargeNumber(multiplication(num.getArray(),num.getArray()));
        // D * den * den
        var Dxdenxden = new LargeNumber(multiplication([D],multiplication(den.getArray(),den.getArray())));

        var test = new LargeNumber(addition([1],Dxdenxden.getArray()));
        if(numxnum.getValue() == test.getValue()){
          console.log(num.getValue()+'^2 - '+D+'x'+den.getValue()+'^2 = 1');
          found = true;
          break;
        }
      }

      break;

      //if(test.getValue()==h2.getValue()){
      //  if(x.length>value.length){
      //    value = x;
      //    max = D;
      //  }else if(x.length==value.length && x>value){
      //    value = x;
      //    max = D;
      //  }
      //  break;
      //}
    }
  }
  return max;
}
