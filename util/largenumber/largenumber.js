var LargeNumber = function(input){
  var value = '';
  var array = [];

  var toArray = function(){
    return value.split(/(?=(?:.......)*$)/).map(x => parseInt(x));
  }
  
  var toString = function(){
    var a = array.slice();
    return a.shift() + a.map(function(x){return("0000000"+x).slice(-7)}).toString().replace(/,/g,"");
  }

  if(typeof(input)=='string'){
    value = input;
    array = toArray();
  }

  if(Array.isArray(input)==true){
    array = input;
    value = toString();
  }

  this.getArray = function(){
    return array;
  }

  this.getValue = function(){
    return value;
  }

  this.setArray = function(A){
    array = A;
    value = toString();
  }

  this.setValue = function(S){
    value = S;
    array = toArray();
  }
}

