/* A googol (10100) is a massive number: one followed by one-hundred zeros;
 * 100100 is almost unimaginably large: one followed by two-hundred zeros. 
 * Despite their size, the sum of the digits in each number is only 1.
 * Considering natural numbers of the form, ab, where a, b < 100, what is the
 * maximum digital sum? */

 function prb56(){
   var result = 0;
   for(var a = 1; a < 100; a++){
     var num = new LargeNumber([1]),
         arr = new LargeNumber([a]).getArray();
     for(var b = 1; b < 100; b++){
       num.setArray(multiplication(num.getArray(), arr));
       var temp = num.getValue(),
           sum = 0;
       for(var i = 0; i < temp.length; i++){
         sum += ~~temp[i];
       }
       if(sum>result) result = sum;
     }
   }
   return result;
 }
