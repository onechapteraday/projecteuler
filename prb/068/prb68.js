/* Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and
 * each line adding to nine.
 *
 *      4
 *       \
 *        3
 *       / \
 *      1---2---6
 *     /
 *    5
 *
 * Working clockwise, and starting from the group of three with the numerically
 * lowest external node (4,3,2 in this example), each solution can be described
 * uniquely. For example, the above solution can be described by the set:
 * 4,3,2; 6,2,1; 5,1,3.
 * It is possible to complete the ring with four different totals: 9, 10, 11, and
 * 12. There are eight solutions in total.
 *
 * Total   Solution Set
 *  9      4,2,3; 5,3,1; 6,1,2
 *  9      4,3,2; 6,2,1; 5,1,3
 * 10      2,3,5; 4,5,1; 6,1,3
 * 10      2,5,3; 6,3,1; 4,1,5
 * 11      1,4,6; 3,6,2; 5,2,4
 * 11      1,6,4; 5,4,2; 3,2,6
 * 12      1,5,6; 2,6,4; 3,4,5
 * 12      1,6,5; 3,5,4; 2,4,6
 *
 * By concatenating each group it is possible to form 9-digit strings; the maximum
 * string for a 3-gon ring is 432621513.
 * Using the numbers 1 to 10, and depending on arrangements, it is possible to form
 * 16- and 17-digit strings. What is the maximum 16-digit string for a "magic"
 * 5-gon ring? */

function prb68(input){
  var sum = (1+2+3+4+5)*2+6+7+8+9+10,
      nodevalue = sum/5,
      first = 6,
      max = '0';

  for(var i = 1; i <= 5; i++){
    var rest = [7,8,9,10];
    for(var j = 1; j <= 5; j++){
      if(i==j) continue;
      var total = first + i + j;
      if(total!=nodevalue) continue;
      for(var k = 1; k <= 5; k++){
        if(k==i || k==j) continue;
        var second = total-j-k;
        if(second>10 || second==i || second==j || second==first) continue;
        rest.remove(second);
        for(var l = 1; l <= 5; l++){
          if(l==i || l==j || l==k) continue;
          var third = total-l-k;
          if(third>10 || third==i || third==j || third==k || third==first || third==second) continue;
          rest.remove(third);
          for(var m = 1; m <= 5; m++){
            if(m==i || m==j || m==k || m==l) continue;
            var fourth = total-m-l;
            if(fourth>10 || fourth==i || fourth==j || fourth==k || fourth==l || fourth==first || fourth==second || fourth==third) continue;
            rest.remove(fourth);
            var value = ''+first+i+j+second+j+k+third+k+l+fourth+l+m+rest[0]+m+i;
            if(value>max)
              max = value;
          }
        }
      }
    }
  }

  return max;
}
