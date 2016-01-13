/* A common security method used for online banking is to ask the user for three
 * random characters from a passcode. For example, if the passcode was 531278, they
 * may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.
 * The text file, keylog.txt, contains fifty successful login attempts.
 * Given that the three characters are always asked for in order, analyse the file
 * so as to determine the shortest possible secret passcode of unknown length. */

function prb79(input){
  // topological sort:
  // http://www.stoimen.com/blog/2012/10/01/computer-algorithms-topological-sort-of-a-graph/
  var keys = input.split('\n');
  keys.pop();
  keys.unique();
  var L = ''; // L: list with no predecessor
  var P = ''; // P: list with predecessor
  for(var i=0; i<keys.length; i++){
    var k1 = keys[i].charAt(1),
        k2 = keys[i].charAt(2);
    if(P.indexOf(k1)==-1){
      P += k1;
    }
    if(P.indexOf(k2)==-1){
      P += k2;
    }
  }
  for(var i=0; i<keys.length; i++){
    var k0 = keys[i].charAt(0);
    if(L.indexOf(k0)==-1 && P.indexOf(k0)==-1){
      L += k0;
    }
  }
  console.log('P: '+P);
  console.log('L: '+L);
  return true;
}
