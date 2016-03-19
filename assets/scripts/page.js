(function (TicTacToe){
  if (typeof TicTacToe === "undefined") {
    console.error("TicTacToe is undefined");
    return;
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    var newGameButton = document.getElementById("newGame");
    var gameBoard = document.getElementsByClassName("game-board");
    document.addEventListener("click", onNewGame);

    console.log(gameBoard);
  });



  function onNewGame() {
    console.log("new game button clicked");
  }

  function updateBoard() {
    // document.addListener()
  }

})(TicTacToe);
