var rollDice = function(){
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll === 1){
    // this.Turn = 0;
    alert("Know when to quit when your ahead! you rolled a 1 your turn is over and you gain no points for this round.");
  }
  return diceRoll;
  // else if{
  //   ((die1 + die2) > 2 || (die3 + die4) > 2){
  //     return
  //   }
  //
  // }


}


$(document).ready(function(){

  // U/I logic
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    $("#header").hide();
    var inputtedName = $("input#player").val();
    var inputtedName2 = $("input#player2").val();

    // var addPlayer = new Player(inputtedName,);



    // Buisness logic


   function Player(name,score,turn){
     this.name = name,
     this.score = score,
     this.turn = turn
   }
    var addPlayer = new Player(inputtedName,0,0);
    // console.log(addPlayer.name);
    // console.log(addPlayer.score);
    // console.log(addPlayer.turn);

    var addPlayer2 = new Player(inputtedName2,0,0);
    // console.log(addPlayer2.name);
    // console.log(addPlayer2.score);
    // console.log(addPlayer2.turn);

  //  Player.prototype.Score = function() {
  //    if(|| ) {
  //      return ;
  //    } else {
  //      return  ;
  //    }
  //  }Player.prototype.Turn = function() {
  //    if( || ) {
  //      return ;
  //    } else {
  //      return  ;
  //    }
  //  }
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
     $("ul#player1turn").append("<span class='player_1'>" + addPlayer.turn + "</span>");
     $("ul#player2name").append("<span class='player_1'>" + addPlayer2.name + "</span>");
     $("ul#player2score").append("<span class='player_1'>" + addPlayer2.score + "</span>");
     $("ul#player2turn").append("<span class='player_1'>" + addPlayer2.turn + "</span>");

    //  $("input#player").val("");

  })
  $("#rollButton").click(function() {

    var roll= rollDice();
    var roll1= rollDice();
    $("span#die1").text(roll);
    $("span#die2").text(roll1);


  });
  $("#rollButton2").click(function() {

    var roll= rollDice();
    $("span#die3").text(roll);
    $("span#die4").text(roll);


  });

});
