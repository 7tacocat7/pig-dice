// // Buisness logic
var rollDice = function(){
  return Math.floor(Math.random() * 6) + 1;

}
function Player(name,score,turn){
  this.name = name;
  this.score = 0;
  this.turn = 0;
}


var newPlayer = new Player();

// Player.prototype.name = function() {
//       if() {
//         return ;
//       } else {
//         return  ;
//       }
//     }

$(document).ready(function(){
  $("form#player").submit(function(event) {
    var inputtedName = $("input#player").val();

})

  $("#rollButton").click(function() {

    var roll= rollDice
    $("span#die1").text(roll);
    $("span#die2").text(roll);
      event.preventDefault();
  });
});
