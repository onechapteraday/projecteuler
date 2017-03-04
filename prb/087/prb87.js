/* The smallest number expressible as the sum of a prime square, prime cube, and
 * prime fourth power is 28. In fact, there are exactly four numbers below fifty
 * that can be expressed in such a way:
 *
 * 28 = 2^2 + 2^3 + 2^4
 * 33 = 3^2 + 2^3 + 2^4
 * 49 = 5^2 + 2^3 + 2^4
 * 47 = 2^2 + 3^3 + 2^4
 *
 * How many numbers below fifty million can be expressed as the sum of a prime
 * square, prime cube, and prime fourth power? */

function prb87() {
  var target = 50000000,
      primes = eratosthenes(~~(Math.sqrt(target))),
      tab = {};

  for (var i = 0; i < primes.length; i++) {
    var i2 = Math.pow(primes[i],2);
    for (var j = 0; primes[j] < Math.cbrt(target - i2); j++) {
      var j3 = Math.pow(primes[j],3);
      for (var k = 0; primes[k] < Math.pow(target - i2 - j3, 1/4); k++) {
        var test = Math.pow(primes[i],2) + Math.pow(primes[j],3) + Math.pow(primes[k],4);

        if (test < target) {
          tab[test] = true;
        }
      }
    }
  }

  var keys = Object.keys(tab);
  return keys.length;
}
