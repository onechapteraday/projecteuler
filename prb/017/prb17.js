/* If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in 
 * words, how many letters would be used? 
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and 
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 
 * letters. The use of "and" when writing out numbers is in compliance with British 
 * usage.*/

 function prb17(){
   var first = ["one","two","three","four","five","six","seven","eight","nine"],
       second = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
       tens = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],
       onethousand = 11,
       hundred = 7,
       and = 3,
       sum = 0;

   // Count 1 to 9
   for(var i=0; i<first.length; i++)
     sum += first[i].length;

   // Count 10 to 19
   for(var i=0; i<second.length; i++)
     sum += second[i].length;

   // Count 20 to 99
   for(var i=0; i<tens.length; i++){
     sum += tens[i].length;
     for(j = 0; j<first.length; j++){
       sum += tens[i].length + first[j].length;
     }
   }

   // Count 100 to 999
   for(var i = 0 ; i < first.length; i++){
     sum += first[i].length + hundred;
     for(var j = 0; j < first.length ; j++)
       sum += first[i].length + hundred + and + first[j].length;
     for(var k = 0; k < second.length ; k++)
       sum += first[i].length + hundred + and + second[k].length;
     for(var l = 0; l < tens.length; l++){
       sum += first[i].length + hundred + and + tens[l].length;
       for( var m = 0; m < first.length ; m++)
         sum +=  first[i].length + hundred + and + tens[l].length + first[m].length;
     }
   }

   sum += onethousand;

   return sum;
 }
