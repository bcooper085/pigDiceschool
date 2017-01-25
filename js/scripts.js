//Business Logic
function result() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player(playerName, playerNumber, score) {
  this.playerNumber = playerNumber;
  this.playerName = playerName;
  this.score = score;
}

var player1 = new Player(Marc, 1, 0);
var player2 = new Player(Brandon, 2, 0);


//UI Logic
$(function() {
  $('.btn').click(function () {
    event.preventDefault();
    $('#result').text(result);
  });
});
