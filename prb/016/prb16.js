/* 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000? */

 function prb16(){
   var sum = new LargeNumber([1]),
       result = 0;
   for(var i=0; i<1000; i++)
     sum.setArray(addition(sum.getArray(), sum.getArray()));
   var digits = sum.getValue().split('');
   for(var i=0; i<digits.length; i++)
     result += parseInt(digits[i]);
   return result;
 }
