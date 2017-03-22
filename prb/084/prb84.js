/* In the game, Monopoly, the standard board is set up in the following way:
 *
 *        GO | A1 | CC1| A2 | T1 | R1 | B1 | CH1| B2 | B3 | JAIL
 *        H2 |      	                                  | C1
 *        T2 |      	                                  | U1
 *        H1 |      	                                  | C2
 *       CH3 |	 	                                  | C3
 *        R4 |      	                                  | R2
 *        G3 |      	                                  | D1
 *       CC3 |	 	                                  | CC2
 *        G2 |      	                                  | D2
 *        G1 |      	                                  | D3
 *       G2J | F3 | U2 | F2 | F1 | R3 | E3 | E2 | CH2| E1 | FP
 *
 * A player starts on the GO square and adds the scores on two 6-sided dice to
 * determine the number of squares they advance in a clockwise direction. Without
 * any further rules we would expect to visit each square with equal probability:
 * 2.5%. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance)
 * changes this distribution.
 *
 * In addition to G2J, and one card from each of CC and CH, that orders the player
 * to go directly to jail, if a player rolls three consecutive doubles, they do not
 * advance the result of their 3rd roll. Instead they proceed directly to jail.
 *
 * At the beginning of the game, the CC and CH cards are shuffled. When a player
 * lands on CC or CH they take a card from the top of the respective pile and, after
 * following the instructions, it is returned to the bottom of the pile. There are
 * sixteen cards in each pile, but for the purpose of this problem we are only
 * concerned with cards that order a movement; any instruction not concerned with
 * movement will be ignored and the player will remain on the CC/CH square.
 *
 * - Community Chest (2/16 cards):
 *   1 - Advance to GO
 *   2 - Go to JAIL
 *
 * - Chance (10/16 cards):
 *   1 - Advance to GO
 *   2 - Go to JAIL
 *   3 - Go to C1
 *   4 - Go to E3
 *   5 - Go to H2
 *   6 - Go to R1
 *   7 - Go to next R (railway company)
 *   8 - Go to next R
 *   9 - Go to next U (utility company)
 *  10 - Go back 3 squares.
 *
 * The heart of this problem concerns the likelihood of visiting a particular
 * square. That is, the probability of finishing at that square after a roll. For
 * this reason it should be clear that, with the exception of G2J for which the
 * probability of finishing on it is zero, the CH squares will have the lowest
 * probabilities, as 5/8 request a movement to another square, and it is the final
 * square that the player finishes at on each roll that we are interested in. We
 * shall make no distinction between "Just Visiting" and being sent to JAIL, and we
 * shall also ignore the rule about requiring a double to "get out of jail",
 * assuming that they pay to get out on their next turn.
 *
 * By starting at GO and numbering the squares sequentially from 00 to 39 we can
 * concatenate these two-digit numbers to produce strings that correspond with sets
 * of squares.
 *
 * Statistically it can be shown that the three most popular squares, in order, are
 * JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. So
 * these three most popular squares can be listed with the six-digit modal string:
 * 102400.
 *
 * If, instead of using two 6-sided dice, two 4-sided dice are used, find the
 * six-digit modal string. */

function prb84(){
  var squares = {
    'GO'   :  0,
    'A1'   :  0,
    'CC1'  :  0,
    'A2'   :  0,
    'T1'   :  0,
    'R1'   :  0,
    'B1'   :  0,
    'CH1'  :  0,
    'B2'   :  0,
    'B3'   :  0,
    'JAIL' :  0,
    'C1'   :  0,
    'U1'   :  0,
    'C2'   :  0,
    'C3'   :  0,
    'R2'   :  0,
    'D1'   :  0,
    'CC2'  :  0,
    'D2'   :  0,
    'D3'   :  0,
    'FP'   :  0,
    'E1'   :  0,
    'CH2'  :  0,
    'E2'   :  0,
    'E3'   :  0,
    'R3'   :  0,
    'F1'   :  0,
    'F2'   :  0,
    'U2'   :  0,
    'F3'   :  0,
    'G2J'  :  0,
    'G1'   :  0,
    'G2'   :  0,
    'CC3'  :  0,
    'G3'   :  0,
    'R4'   :  0,
    'CH3'  :  0,
    'H1'   :  0,
    'T2'   :  0,
    'H2'   :  0
  };

  var cc_squares = ['GO', 'JAIL', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  var ch_squares = ['GO', 'JAIL', 'C1', 'E3', 'H2', 'R1', 'Rx', 'Rx', 'Ux', '-3', '', '', '', '', '', ''];

  var dice1 = 0;
  var dice2 = 0;
  var doubles = 0;
  var previous = 0;

  var moves = 2000000;
  var nbFacesDice = 6;

  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var last_double;

  for (var i = 0; i < moves; i++) {
    dice1 = getRandom(1, nbFacesDice + 1);
    dice2 = getRandom(1, nbFacesDice + 1);

    if(dice1 == dice2) {
      if(last_double == i-1) {
        doubles += 1;
      } else {
	doubles = 0;
      }

      last_double = i;
    }

    var current = '';

    if(doubles == 3) {
      // player goes to jail
      previous = Object.keys(squares).indexOf('JAIL');
      current = 'JAIL';
      doubles = 0;
    } else {
      // moves to the 'maybe' square
      previous += dice1 + dice2;

      // prevent previous to be out of the Monopoly board
      if (previous > 39) {
        previous -= 40;
      }

      current = Object.keys(squares)[previous];

      // if current square equals Chance
      if (current.startsWith('CH')) {
        var next = ch_squares[0];
	ch_squares.shift();
	ch_squares.push(next);

        if (next != '') {
	  // go back three squares
	  if (next == '-3') {
	    previous -= 3;
	    current = Object.keys(squares)[previous];
	  }

	  // go to next Utility
	  else if (next == 'Ux') {
	    if(current == 'CH1' || current == 'CH3') {
	      current = 'U1';
	    }

	    if(current == 'CH2') {
	      current = 'U2';
	    }

	    previous = Object.keys(squares).indexOf(current);
	  }

	  // go to the next Railway
	  else if(next == 'Rx') {
	    if(current == 'CH1') {
	      current = 'R2';
	    }

	    if(current == 'CH2') {
	      current = 'R3';
	    }

	    if(current == 'CH3') {
	      current = 'R1';
	    }

	    previous = Object.keys(squares).indexOf(current);
	  }

	  else {
	    current = next;
	    previous = Object.keys(squares).indexOf(current);
	  }
        }
      }

      // if current square equals Community Chest
      if (current.startsWith('CC')) {
        var next = cc_squares[0];
	cc_squares.shift();
	cc_squares.push(next);

        if (next != '') {
	  current = next;
	  previous = Object.keys(squares).indexOf(next);
	}
      }

      // finally if player go on G2J
      if(current == 'G2J') {
        // player goes to jail
        previous = Object.keys(squares).indexOf('JAIL');
        current = 'JAIL';
      }

    }

    // go to the next square;
    squares[current] += 1;
  }

  var keysSorted = Object.keys(squares).sort(function(a,b){
    return squares[b] - squares[a]
  });

  console.log(squares);
  console.log(keysSorted);

  return true;
}
