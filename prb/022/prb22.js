/* Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
 * containing over five-thousand first names, begin by sorting it into
 * alphabetical order. Then working out the alphabetical value for each name,
 * multiply this value by its alphabetical position in the list to obtain a
 * name score.
 * For example, when the list is sorted into alphabetical order, COLIN, which is
 * worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
 * would obtain a score of 938 × 53 = 49714.
 * What is the total of all the name scores in the file? */

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
