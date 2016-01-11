/* A common security method used for online banking is to ask the user for three
 * random characters from a passcode. For example, if the passcode was 531278, they
 * may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.
 * The text file, keylog.txt, contains fifty successful login attempts.
 * Given that the three characters are always asked for in order, analyse the file
 * so as to determine the shortest possible secret passcode of unknown length. */

function prb79(input){
  // topological sort: http://www.stoimen.com/blog/2012/10/01/computer-algorithms-topological-sort-of-a-graph/
  var keys = input.split('\n');
  keys.pop();
  return true;
}
