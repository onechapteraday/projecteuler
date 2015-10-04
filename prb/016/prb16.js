/* 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000? */

 function prb16(){
   var sum = 1,
       result = 0;
   for(var i=0; i<1000; i++)
     sum = addition(sum, sum);
   var digits = (''+sum).split('');
   for(var i=0; i<digits.length; i++)
     result += parseInt(digits[i]);
   return result;
 }
