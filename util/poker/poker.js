/* In poker, players construct hands of playing cards according to predetermined
 * rules, which vary according to which variant of poker is being played. These
 * hands are compared using a hand ranking system that is standard across all
 * variants of poker.
 * The player with the highest-ranking hand wins that particular deal in most poker
 * games. In some variants, the lowest-ranking hand can win or tie. */

function sortcards(array){
  var cards = '23456789TJQKA';
  array.sort(function(x,y){
    if(cards.indexOf(x[0]) > cards.indexOf(y[0]))
      return true;
  });
}

function highestcardvalue(a,b){
  if(a.length == b.length){
    var cards = '23456789TJQKA',
        highest = [],
        i = a.length-1;
    sortcards(a);
    sortcards(b);
    while(highest.length==0 && i>=0){
      if(cards.indexOf(a[i][0]) > cards.indexOf(b[i][0]))
        highest = a;
      if(cards.indexOf(b[i][0]) > cards.indexOf(a[i][0]))
        highest = b;
      i--;
    }
    return highest;
  }
  return false;
}

function findpair(array){
  if(array.length==5){
    var pair = [],
        k = 0;
    while(pair.length==0 && k<4){
      if(array[k][0] == array[k+1][0]){
        pair.push(array[k]);
        pair.push(array[k+1]);
      }
      k++;
    }
    return pair;
  }
  return false;
}

function findthree(array){
  if(array.length==5){
    var three = '',
        k = 0;
    while(three=='' && k<3){
      if(array[k][0] == array[k+1][0] && array[k+1][0] == array[k+2][0])
        three = array[k][0];
      k++;
    }
    return three;
  }
  return '';
}

function findfour(array){
  if(array.length==5){
    var four = '',
        k = 0;
    while(four=='' && k<2){
      if(array[k][0] == array[k+1][0] && array[k+1][0] == array[k+2][0] && array[k+2][0] == array[k+3][0])
        four = array[k][0];
      k++;
    }
    return four;
  }
  return '';
}

function findtwopairs(array){
  if(array.length==5){
    var pair = [],
        k = 0;
    while(pair.length<2 && k<4){
      var temp = [];
      if(array[k][0] == array[k+1][0]){
	temp.push(array[k]);
        temp.push(array[k+1]);
	pair.push(temp);
	k +=2;
      } else k++;
    }
    return pair;
  }
  return false;
}

function isonepair(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0]),
        b = (array[1][0] == array[2][0]),
        c = (array[2][0] == array[3][0]),
        d = (array[3][0] == array[4][0]);
    return (a || b || c || d);
  }
  return false;
}

function onepairdraw(a,b){
  var pair1 = findpair(a),
      pair2 = findpair(b),
      high = highestcardvalue(pair1,pair2);
  if(high.length!=0){
    if(pair1.equals(high)) return a;
    else return b;
  } else{
    var temp1 = a.slice().remove(pair1[0]).remove(pair1[1]);
        temp2 = b.slice().remove(pair2[0]).remove(pair2[1]);
    high = highestcardvalue(temp1,temp2);
    if(high.length!=0){
      if(temp1.equals(high)) return a;
      else return b;
    }
  }
}

function istwopairs(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0] && array[2][0] == array[3][0]),
        b = (array[0][0] == array[1][0] && array[3][0] == array[4][0]),
        c = (array[1][0] == array[2][0] && array[3][0] == array[4][0]);
    return (a || b || c);
  }
  return false;
}

function twopairsdraw(a,b){
  var pair1 = findtwopairs(a),
      pair2 = findtwopairs(b),
      high = highestcardvalue(pair1[1],pair2[1]);
  if(high.length!=0){
    if(pair1[1].equals(high)) return a;
    else return b;
  } else {
    var high2 = highestcardvalue(pair1[0],pair1[0]);
    if(high2.length!=0){
      if(pair1[0].equals(high)) return a;
      else return b;
    } else {
      var temp1 = a.slice().remove(pair1[0][0]).remove(pair1[0][1]).remove(pair1[1][0]).remove(pair1[1][1]);
          temp2 = b.slice().remove(pair2[0][0]).remove(pair2[0][1]).remove(pair2[1][0]).remove(pair2[1][1]);
      high = highestcardvalue(temp1,temp2);
      if(high.length!=0){
        if(temp1.equals(high)) return a;
        else return b;
      }
    }
  }
}

function isthreeofakind(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0] && array[1][0] == array[2][0]),
        b = (array[1][0] == array[2][0] && array[2][0] == array[3][0]),
        c = (array[2][0] == array[3][0] && array[3][0] == array[4][0]);
    return (a || b || c);
  }
  return false;
}

function threeofakinddraw(a,b){
  var cards = '23456789TJQKA',
      three1 = findthree(a),
      three2 = findthree(b);
  if(cards.indexOf(three1) > cards.indexOf(three2)) return a;
  else return b;
}

function isstraight(array){
  if(array.length==5){
    var cards = '23456789TJQKA',
        index;
    sortcards(array);
    index = cards.indexOf(array[0][0]);
    for(var i = 1; i < array.length; i++){
      if(array[i][0]==cards[index+i]) continue;
      else return false;
    }
    return true;
  }
  return false;
}

function isflush(array){
  var suit = array[0][1];
  if(array.length==5){
    for(var i = 1; i < 5; i ++){
      if(array[i][1]!=suit)
        return false;
    }
    return true;
  }
  return false;
}

function isfullhouse(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0] && array[1][0] == array[2][0] && array[3][0] == array[4][0]),
        b = (array[0][0] == array[1][0] && array[2][0] == array[3][0] && array[3][0] == array[4][0]);
    return (a || b);
  }
  return false;
}

function fullhousedraw(a,b){
  var three1 = findthree(a),
      three2 = findthree(b),
      high = highestcardvalue(three1,three2);
  if(high.length!=0){
    if(three1.equals(high)) return a;
    else return b;
  }
}

function isfourofakind(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0] && array[1][0] == array[2][0] && array[2][0] == array[3][0]),
        b = (array[1][0] == array[2][0] && array[2][0] == array[3][0] && array[3][0] == array[4][0]);
    return (a || b);
  }
  return false;
}

function fourofakinddraw(a,b){
  var cards = '23456789TJQKA',
      four1 = findfour(a),
      four2 = findfour(b);
  if(cards.indexOf(four1) > cards.indexOf(four2)) return a;
  else return b;
}

function isstraightflush(array){
  if(array.length==5){
    if(isflush(array)){
      if(isstraight(array)){
        return true;
      }
    }
  }
  return false;
}

function isroyalflush(array){
  if(array.length==5){
    if(isflush(array)){
      var cards = 'TJQKA';
      for(var i = 0; i < 5; i++){
        if(cards.indexOf(array[i][0])>-1){
          cards = cards.replace(array[i][0],'');
        } else return false;
      }
      if(!cards) return true;
    }
  }
  return false;
}
