/* Work out the first ten digits of the sum of the following one-hundred 
 * 50-digit numbers. */

function prb22(input){
  var l = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      names = input.split(/,/).sort().map(x => x.replace(/"([^"]+(?="))"/g, '$1')),
      values = [];

  for(var i = 0; i < names.length; i++){
    var characters = (''+names[i]).split(''),
        chr_sum = 0;
    for(var j = 0 ; j < characters.length; j++){
      for(var k = 0 ; k < l.length; k++){
        if(characters[j] == l[k]){
          chr_sum += k+1;
        }
      }
    }
    values[i] = chr_sum * (i+1);
  }

  return values.reduce((acc, x) => acc + x);
}
