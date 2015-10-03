/* A triangular number counts the object that can form an equilateral triangle.
 * The nth triangle number is the number of dots composing a triangle with n
 * dots on a side, and is equal to the sum of the n natural numbers from 1 to n.*/

function triangular(n){
  var triangles = new Array();
  for(var i = 0; i < n; i++)
    triangles.push(i*(i+1)/2);
  return triangles; 
}
