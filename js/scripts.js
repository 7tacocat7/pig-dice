// // Buisness logic
var rollDice = function(){
  return Math.floor(Math.random() * 6) + 1;

}
var player_score =


$(document).ready(function(){
  $("#rollButton").click(function() {

    var roll= rollDice
    $("span#die1").text(roll);
    $("span#die2").text(roll);
      event.preventDefault();
  });
});
