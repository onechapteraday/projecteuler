/* It turns out that 12 cm is the smallest length of wire that can be bent to form
 * an integer sided right angle triangle in exactly one way, but there are many more
 * examples.
 *
 * 12 cm: (3,4,5)
 * 24 cm: (6,8,10)
 * 30 cm: (5,12,13)
 * 36 cm: (9,12,15)
 * 40 cm: (8,15,17)
 * 48 cm: (12,16,20)
 *
 * In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer
 * sided right angle triangle, and other lengths allow more than one solution to be
 * found; for example, using 120 cm it is possible to form exactly three different
 * integer sided right angle triangles.
 *
 * 120 cm: (30,40,50), (20,48,52), (24,45,51)
 *
 * Given that L is the length of the wire, for how many values of L <= 1,500,000
 * can exactly one integer sided right angle triangle be formed? */

function prb75(){
  var count = 0,
      x = 1500000,
      triples = new Array(x),
      limit = Math.sqrt(x);

  for(var i = 0; i < triples.length; i++) {
    triples[i] = 0;
  }

  for (var i = 1; i < limit; i += 2) {
    for (var j = 2; j <= limit; j += 2) {
      if (gcd(i, j) != 1)
      	continue;
      var a = Math.abs(i * i - j * j),
          b = 2 * i * j,
          c = i * i + j * j,
          sum = a + b + c,
          t = sum;
      while(t <= x){
      	triples[t] += 1;
      	t += sum;
      }
    }
  }

  for (var i = 1; i < triples.length; i++) {
    if(triples[i] == 1) count++;
  }

  return count;
}
