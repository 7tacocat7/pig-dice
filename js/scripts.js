var rollDice = function(){
  return Math.floor(Math.random() * 6) + 1;

}


$(document).ready(function(){

  // U/I logic
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#player").val();
    var addPlayer = new Player(inputtedName);



    // Buisness logic


   function Player(name,score,turn){
     this.name = name;
     this.score = score;
     this.turn = turn;
   }

   Player.prototype.newPlayer = function() {
     return 0 + this.Name + this.Score + this.Turn;
   }

   Player.prototype.Name = function() {
     return inputtedName;
     }
   // Player.prototype.Score = function() {
   //   if(|| ) {
   //     return ;
   //   } else {
   //     return  ;
   //   }
   // }Player.prototype.Turn = function() {
   //   if( || ) {
   //     return ;
   //   } else {
   //     return  ;
   //   }
   // }

    var inputtedName = " ";
    var score = 0;
    var turn = 0;

     $("ul#player1name").append("<span class='player_1'>" + addPlayer.Name + "</span>");

    //  $("input#player").val("");

  })
  $("#rollButton").click(function() {

    var roll= rollDice
    $("span#die1").text(roll);
    $("span#die2").text(roll);

  });
});
