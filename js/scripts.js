//Business Logic
 var turnScore = 0;
 var playerTotal1 = 0;
 var playerTotal2 = 0;
 var rollDice = 0;

function Player(score) {
  // this.playerNumber = playerNumber;
  // this.playerName = playerName;
  this.score = score;
}

var player1 = new Player(0);
var player2 = new Player(0);

function rollDice1() {
  rollDice = Math.floor((Math.random() * 6) + 1);
  if (rollDice > 1) {
    return rollDice;
  } else {
    return 0;
  }
}
function addToTotal1() {
  return player1.score += rollDice;
}

function rollDice2() {
  rollDice = Math.floor((Math.random() * 6) + 1);
  if (rollDice > 1) {
    return rollDice;
  } else {
    return rollDice += 0;
  }
}
function addToTotal2() {
  return player2.score += rollDice;
}

function winner() {
  if (playerTotal1 >= 100) {
    alert("Player 1 wins");
  } else if (playerTotal2 >=100) {
    alert("Player 2 wins");
  }
}



//UI Logic
$(function() {
  $('.btn1').click(function() {
    $('.diceNow').text(rollDice1);
    winner();
  })
  $('.switch1').click(function() {
    $('.display-total-score-one').text(addToTotal1);
    $('.btn1').hide();
    $('.switch1').hide();
    $('.btn2').show();
    $('.switch2').show();

  })
  $('.btn2').click(function() {
    $('.diceNow').text(rollDice2);
    winner();
  })
  $('.switch2').click(function() {
    $('.display-total-score-two').text(addToTotal2);
    $('.btn2').hide();
    $('.switch2').hide();
    $('.btn1').show();
    $('.switch1').show();


  })
});
