/* In the card game poker, a hand consists of five cards and are ranked, from
 * lowest to highest, in the following way:
 * 
 * - High Card: Highest value card.
 * - One Pair: Two cards of the same value.
 * - Two Pairs: Two different pairs.
 * - Three of a Kind: Three cards of the same value.
 * - Straight: All cards are consecutive values.
 * - Flush: All cards of the same suit.
 * - Full House: Three of a kind and a pair.
 * - Four of a Kind: Four cards of the same value.
 * - Straight Flush: All cards are consecutive values of same suit.
 * - Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
 * 
 * The cards are valued in the order:
 * 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
 * If two players have the same ranked hands then the rank made up of the highest
 * value wins; for example, a pair of eights beats a pair of fives (see example 1
 * below). But if two ranks tie, for example, both players have a pair of queens,
 * then highest cards in each hand are compared (see example 4 below); if the
 * highest cards tie then the next highest cards are compared, and so on.
 * Consider the following five hands dealt to two players:
 * 
 * Hand	 Player 1	 	Player 2	 	Winner
 * 1	 5H 5C 6S 7S KD         2C 3S 8S 8D TD          Player 2
 *       Pair of Fives          Pair of Eights
 *  	
 * 2	 5D 8C 9S JS AC         2C 5C 7D 8S QH          Player 1
 *       Highest card Ace       Highest card Queen
 *  	
 * 3	 2D 9C AS AH AC         3D 6D 7D TD QD          Player 2
 *       Three Aces             Flush with Diamonds
 * 
 * 4	 4D 6S 9H QH QC         3D 6D 7H QD QS          Player 1
 *       Pair of Queens         Pair of Queens
 *       Highest card Nine      Highest card Seven
 *  	
 * 5	 2H 2D 4C 4D 4S         3C 3D 3S 9S 9D          Player 1
 *       Full House             Full House
 *       With Three Fours       With Three Threes
 *  	
 * The file, poker.txt, contains one-thousand random hands dealt to two players.
 * Each line of the file contains ten cards (separated by a single space): the first
 * five are Player 1's cards and the last five are Player 2's cards. You can assume
 * that all hands are valid (no invalid characters or repeated cards), each player's
 * hand is in no specific order, and in each hand there is a clear winner.
 * How many hands does Player 1 win? */

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
      if(array[k][0] == array[k+1][0] && array[k+1][0] == array[k+2][0]){
        three = array[k][0];
      }
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
      if(array[k][0] == array[k+1][0] && array[k+1][0] == array[k+2][0] && array[k+2][0] == array[k+3][0]){
        four = array[k][0];
      }
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

function prb54(input){
  var combinations = [isroyalflush, isstraightflush, isfourofakind, isfullhouse, isflush, isstraight, isthreeofakind, istwopairs, isonepair],
      player1 = [],
      player2 = [],
      score = 0;

  input = input.replace(/ /g,'').split('\n');
  for(var i = 0; i < input.length-1; i++){
    var temp1 = [],
        temp2 = [];
    for(var j = 0; j < 10; j+=2){
      temp1.push( input[i].substr(j,2) );
      temp2.push( input[i].substr(j+10,2) );
    }
    player1.push(temp1);
    player2.push(temp2);
  }

  for(var i = 0; i < player1.length; i++){
    var won = false;
    for(var j = 0; j < combinations.length; j++){
      if(combinations[j](player1[i]) || combinations[j](player2[i])){
        won = true;
        if(combinations[j](player1[i]) && !combinations[j](player2[i])){
          score++;
        } else if(combinations[j](player1[i]) && combinations[j](player2[i])){
	  if(combinations[j]==isonepair){
	    var high = onepairdraw(player1[i],player2[i]);
	    if(player1[i].equals(high)) score++;
	  }
	  if(combinations[j]==istwopairs){
	    var high = twopairsdraw(player1[i],player2[i]);
	    if(player1[i].equals(high)) score++;
	  }
	  if(combinations[j]==isthreeofakind){
	    var high = threeofakinddraw(player1[i],player2[i]);
	    if(player1[i].equals(high)) score++;
	  }
	  if(combinations[j]==isstraight || combinations[j]==isstraightflush){
	    if(player1[i][0]>player2[i][0]) score++;
	  }
	  if(combinations[j]==isflush){
	    if(player1[i][4]>player2[i][4]) score++;
	  }
	  if(combinations[j]==isfullhouse){
	    var high = fullhousedraw(player1[i],player2[i]);
	    if(player1[i].equals(high)) score++;
	  }
	  if(combinations[j]==isfourofakind){
	    var high = fourofakinddraw(player1[i],player2[i]);
	    if(player1[i].equals(high)) score++;
	  }
        }
        break;
      }
    }
    if(!won){
      var high = highestcardvalue(player1[i],player2[i]);
      if(player1[i].equals(high)) score++;
    }
  }

  return score;
}
