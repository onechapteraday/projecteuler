/* The collatz conjecture is: "this process will eventually reach the number
 * 1, regardless which positive integer is chosen initially."
 * n = n/2 (even) ; n = 3n+1 (odd).
 * Here we calculate the chain length before reach number 1.
 * This function is written with memoization. And it includes the number itself in 
 * the chain length. This means if 19 has a chain of 21 numbers, it takes 20 steps 
 * to reach 1. */

 var collatz = memoizer([1,1], function(shell, n){
   return (n==1)?1:1+shell((n%2==0)?n/2:3*n+1);
 });
