//Business Logic
var playerTotal1;
var playerTotal2;
var roll;
var currentScore = 0;
var currentPlayer = 1;


function Player(score) {
  // this.playerName = playerName;
  this.score = score;
}

var player1 = new Player(0);
var player2 = new Player(0);

function rollDice() {
  var roll = Math.floor((Math.random() * 6) + 1);
  if (roll === 1) {
    currentScore = 0;
    switchPlayer();
  } else {
    currentScore += roll;
  }
  return roll;
}

function switchPlayer() {
  if (currentPlayer === 1) {
    playerTotal1 += currentScore;
    currentPlayer = 2;
  } else {
    playerTotal2 += currentScore;
    currentPlayer = 1;
  }
  return playerTotal1;
  return playerTotal2;
}


function addToTotal1() {
  return player1.score += currentScore;
}

function addToTotal2() {
  return player2.score += currentScore;
}

function winner() {
  if (addToTotal1 >= 100) {
    alert("Player 1 wins");
  } else if (addToTotal2 >=100) {
    alert("Player 2 wins");
  }
}


//UI Logic
$(function() {
  $('.player1').submit(function() {
    event.preventDefault();
    $("#player-one-name").text($("#player-name-1").val());
    $("#player-two-name").text($("#player-name-2").val());
  });

  $('.btn1').click(function() {
    $('.diceNow').text(rollDice);
    $('.currentTotal').text(currentScore);
    winner();
  })
  $('.switch1').click(function() {
    $('.display-total-score-one').text(addToTotal1);
    $('.btn1').hide();
    $('.switch1').hide();
    $('.btn2').show();
    $('.switch2').show();
    currentScore = 0;

  })
  $('.btn2').click(function() {
    $('.diceNow').text(rollDice);
    $('.currentTotal').text(currentScore);
    winner();
  })
  $('.switch2').click(function() {
    $('.display-total-score-two').text(addToTotal2);
    $('.btn2').hide();
    $('.switch2').hide();
    $('.btn1').show();
    $('.switch1').show();
    currentScore = 0;

  })
});
