/* Return if a number is a permutation of another one. */

function ispermutation(x,y){
  if(x.toString().length!=y.toString().length)
    return false;
  var tabx = x.toString().split(''),
    taby = y.toString().split('');
  tabx.sort((x,y) => x-y);
  taby.sort((x,y) => x-y);
  var response = tabx.every(function(element, index) {
    return element === taby[index]; 
  });
  return response;
}
