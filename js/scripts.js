//Business Logic
function result() {
  return Math.floor((Math.random() * 6) + 1);
}

//UI Logic
$(function() {
  $('.btn').click(function () {
    event.preventDefault();
    $('#result').text(result);
  });
});
