//Business Logic
// var dice = function rollDice() {
//   return Math.floor((Math.random() * 6) + 1);
// }

 var turnScore = 0;
 var playerScore = 0;

function Player(playerName, playerNumber, score) {
  this.playerNumber = playerNumber;
  this.playerName = playerName;
  this.score = score;
}

// var player1 = new Player(Marc, 1, 0);
// var player2 = new Player(Brandon, 2, 0);

function currentRoll() {
  var rollDice = Math.floor((Math.random() * 6) + 1);
  if (rollDice > 1) {
    return turnScore += rollDice;
  } else {
    return turnScore = 0;
  }
}

//UI Logic
$(function() {
  $('.btn').click(function() {
    event.preventDefault();
    $('#result').text(currentRoll);
  });

  $('.switch').click(function() {
    
    playerScore += turnScore;
  });
});
