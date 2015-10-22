/* The fraction 49/98 is a curious fraction, as an inexperienced mathematician in
 * attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is
 * correct, is obtained by cancelling the 9s.
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 * There are exactly four non-trivial examples of this type of fraction, less than
 * one in value, and containing two digits in the numerator and denominator.
 * If the product of these four fractions is given in its lowest common terms, find
 * the value of the denominator. */

function prb33(){
  var first = 1,
      second = 1,
      _gcd = 0;
  for(var a = 10; a<99; a++){
    for(var b = a+1; b<100; b++){
      if(commondigit(a,b)){
        if(!(a%10==0 && b%10==0)){
          var same = commondigit(a,b),
              a_new = parseInt(String(a).substr(String(a).indexOf(same)-1,1)),
              b_new = parseInt(String(b).substr(String(b).indexOf(same)-1,1));
          if(a*b_new==a_new*b){
            first *= a;
            second *= b;
          }
        }
      }
    }
  }
  _gcd = gcd(first,second);
  return second/_gcd;
}
