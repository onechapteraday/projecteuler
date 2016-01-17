var LargeNumber = function(input){
  var array = [];

  if(typeof(input)=='string'){
    array = input.split(/(?=(?:.......)*$)/).map(x => parseInt(x));
  }

  if(Array.isArray(input)==true){
    array = input;
  }

  this.getArray = function(){
    return array;
  }

  this.setArray = function(A){
    array = A;
  }

  this.getValue = function(){
    return array.reduce((acc,x,i) => acc + (i==0?x:('0000000'+x).slice(-7)), '');
  }

  this.setValue = function(S){
    array = S.split(/(?=(?:.......)*$)/).map(x => parseInt(x));
  }

  this.getDigitsSum = function(){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      var nibble = array[i];
      while (nibble!=0){
        sum += nibble%10;
        nibble = ~~(nibble/10);
      }
    }
    return sum;
  }
}
