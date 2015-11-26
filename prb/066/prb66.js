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
 * 3^2 - 2×2^2 = 1
 * 2^2 - 3×1^2 = 1
 * 9^2 - 5×4^2 = 1
 * 5^2 - 6×2^2 = 1
 * 8^2 - 7×3^2 = 1
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
  for(var D = 2; D <= 7; D++){
    if(issquare(D)) continue;
    for(var y = new LargeNumber([1]); ; y.setArray(addition(y.getArray(),[1]))){
      var conv = convergent(D,parseInt(y.getValue()));
      var h = [conv[0]],
          x = conv[0],
          k = [conv[1]],
	  h2 = new LargeNumber(multiplication(h,h)),
	  Dk2 = multiplication([D],multiplication(k,k)),
	  test = new LargeNumber(addition([1],Dk2));
      if(test.getValue()==h2.getValue()){
        //console.log(x+'^2 - '+D+'x'+k+'^2 = 1');
	if(x.length>value.length){
	  value = x;
	  max = D;
	}else if(x.length==value.length && x>value){
	  value = x;
	  max = D;
	}
	break;
      }
    }
  }
  return max;
}
