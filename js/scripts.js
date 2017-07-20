var rollDice = function(){
  return Math.floor(Math.random() * 6) + 1;

}


$(document).ready(function(){

  // U/I logic
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#player").val();

    // var addPlayer = new Player(inputtedName,);



    // Buisness logic


   function Player(name,score,turn){
     this.name = name,
     this.score = score,
     this.turn = turn
   }
    var addPlayer = new Player(inputtedName,0,0);
    console.log(addPlayer.name);
    console.log(addPlayer.score);
    console.log(addPlayer.turn);

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
   Player.prototype.start = function() {
   return this.name + " " + this.score + " " + this.turn+ " ";
   }

   Player.prototype.newPlayer = function() {
     return 0 + this.Name + this.Score + this.Turn;
   }
    var inputtedName = " ";
    var score = 0;
    var turn = 0;

     $("ul#player1name").append("<span class='player_1'>" + addPlayer.name + "</span>");
     $("ul#player1score").append("<span class='player_1'>" + addPlayer.score + "</span>");
     $("ul#player1turn").append("<span class='player_1'>" + addPlayer.score + "</span>");

    //  $("input#player").val("");

  })
  $("#rollButton").click(function() {

    var roll= rollDice
    $("span#die1").text(roll);
    $("span#die2").text(roll);

  });
});
