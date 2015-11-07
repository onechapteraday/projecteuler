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

function isfourofakind(array){
  if(array.length==5){
    sortcards(array);
    var a = (array[0][0] == array[1][0] && array[1][0] == array[2][0] && array[2][0] == array[3][0]),
        b = (array[1][0] == array[2][0] && array[2][0] == array[3][0] && array[3][0] == array[4][0]);
    return (a || b);
  }
  return false;
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
  var player1 = [['5H','5C','6S','7S','KD'],['5D','8C','9S','JS','AC'],['2D','9C','AS','AH','AC'],['4D','6S','9H','QH','QC'],['2H','2D','4C','4D','4S']],
      player2 = [['2C','3S','8S','8D','TD'],['2C','5C','7D','8S','QH'],['3D','6D','7D','TD','QD'],['3D','6D','7H','QD','QS'],['3C','3D','3S','9S','9D']],
      combinations = [isroyalflush, isstraightflush, isfourofakind, isfullhouse, isflush, isstraight, isthreeofakind, istwopairs, isonepair],
      score1 = 0,
      score2 = 0;
  for(var i = 0; i < player1.length; i++){
    var won = false;
    for(var j = 0; j < combinations.length; j++){
      if(combinations[j](player1[i]) || combinations[j](player2[i])){
        console.log(combinations[j]);
        if(combinations[j](player1[i]) && !combinations[j](player2[i])){
          console.log('game '+(i+1)+': p1 won');
          score1++;
        }
        else if(!combinations[j](player1[i]) && combinations[j](player2[i])){
          console.log('game '+(i+1)+': p2 won');
          score2++;
        }
        else {
          console.log('game '+(i+1)+': they both have the winning combination');
        }
        won = true;
        break;
      }
    }
    if(!won){
      console.log(highestcardvalue);
      var high = highestcardvalue(player1[i],player2[i]);
      if(player1[i].equals(high)){
        console.log('game '+(i+1)+': p1 won');
        score1++;
      }
      if(player2[i].equals(high)){
        console.log('game '+(i+1)+': p2 won');
        score2++;
      }
      won = true;
    }
  }
  return true;
}
