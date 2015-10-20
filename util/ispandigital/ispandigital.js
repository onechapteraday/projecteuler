/* An 9-digit number is pandigital if it makes use of all the digits 1 to 9
 * exactly once. */

function ispandigital(text){
  var pattern = /^(?=[^1]*1[^1]*$)(?=[^2]*2[^2]*$)(?=[^3]*3[^3]*$)(?=[^4]*4[^4]*$)(?=[^5]*5[^5]*$)(?=[^6]*6[^6]*$)(?=[^7]*7[^7]*$)(?=[^8]*8[^8]*$)(?=[^9]*9[^9]*$)[1-9]+$/;
  return pattern.test(text);
}
