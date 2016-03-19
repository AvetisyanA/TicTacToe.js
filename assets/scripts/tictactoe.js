'use strict';

function Board() {
  var board = [[ "", "", ""], [ "", "", ""], ["", "", ""]];

  function clearBoard() {
    for (var i = 0; i < board.lenght; i++) {
      for (var j = 0; j < board.lenght; j++) {
        board[i][j] = "";
      }
    }
  }

  function clear(i, j) {
    set(i, j, "");
  }

  function isEmpty(i, j) {
    return get(i, j) == "";
  }

  function get(i, j) {
    return board[i][j];
  }

  function set(i, j, value) {
    board[i][j] = value;
  }

  this.clearBoard = clearBoard;
  this.clear = clear;
  this.isEmpty = isEmpty;
  this.set = set;
  this.get = get;
}

function TicTacToe() {
  var board = new Board();

  function reset(i, j) {
    board.set(i, j, "");
  }

  function putX(i, j) {
    if (board.isEmpty(i, j)) {
      board.set(i, j, "X");
      return true;
    }

    return false;
  }

  function putO(i, j) {
    if (board.isEmpty(i, j)) {
      board.set(i, j, "O");
      return true;
    }

    return false;
  }

  function calculateWeight(c) {
    var weight = 0;
    var goodCross = 0;
    var badCross = 0;
    var emptyCross = 0;
    var goodReverseCross = 0;
    var badReverseCross = 0;
    var emptyReverseCross = 0;

    for (var i = 0; i < 3; i++) {
      var good = 0;
      var bad = 0;
      var empty = 0;
      var goodCol = 0;
      var badCol = 0;
      var emptyCol = 0;

      for (var j = 0; j < 3; j++) {
        if (board.isEmpty(i, j)) {
          ++empty;
        }
        else if (board.get(i, j) === c) {
          ++good;
        }
        else {
          ++bad;
        }

        if (board.isEmpty(j, i)) {
          ++emptyCol;
        }
        else if (board.get(j, i) === c) {
          ++goodCol;
        }
        else {
          ++badCol;
        }
      }

      if (board.isEmpty(i, i)) {
        ++emptyCross;
      }
      else if (board.get(i, i) === c) {
        ++goodCross;
      }
      else {
        ++badCross;
      }

      if (board.isEmpty(i, 2 - i)) {
        ++emptyReverseCross;
      }
      else if (board.get(i, 2 - i) === c) {
        ++goodReverseCross;
      }
      else {
        ++badReverseCross;
      }

      if (good === 1 && empty === 2) {
        weight += 2;
      }
      else if (good === 2 && empty === 1) {
        weight += 5;
      }
      else if (good === 3) {
        weight += 50;
      }
      else if (bad === 2 && empty === 1) {
        weight -= 10;
      }
      else if (bad === 1 && empty === 2) {
        weight -= 2;
      }

      if (goodCol === 1 && emptyCol === 2) {
        weight += 2;
      }
      else if (goodCol === 2 && emptyCol === 1) {
        weight += 5;
      }
      else if (goodCol === 3) {
        weight += 50;
      }
      else if (badCol === 2 && emptyCol === 1) {
        weight -= 10;
      }
      else if (badCol === 1 && emptyCol === 2) {
        weight -= 2;
      }

    }

    if (goodCross === 1 && emptyCross === 2) {
      weight += 2;
    }
    else if (goodCross === 2 && emptyCross === 1) {
      weight += 5;
    }
    else if (goodCross === 3) {
      weight += 50;
    }
    else if (badCross === 2 && emptyCross === 1) {
      weight -= 10;
    }
    else if (badCross === 1 && emptyCross === 2) {
      weight -= 2;
    }

    if (goodReverseCross === 1 && emptyReverseCross === 2) {
      weight += 2;
    }
    else if (goodReverseCross === 2 && emptyReverseCross === 1) {
      weight += 5;
    }
    else if (goodReverseCross === 3) {
      weight += 50;
    }
    else if (badReverseCross === 2 && emptyReverseCross === 1) {
      weight -= 10;
    }
    else if (badReverseCross === 1 && emptyReverseCross === 2) {
      weight -= 2;
    }

    return weight;
  }

  function isGameOver() {
    for (var i = 0; i < 3; ++i) {
      for (var j = 0; j < 3; ++j) {
        if (board.isEmpty(i, j)) {
          return false;
        }
      }
    }

    return true;
  }

  function printBoard() {
    for (var i = 0; i < 3; ++i) {
      var gameLog = "";
      for (var j = 0; j < 3; ++j) {
        if (board.isEmpty(i, j)) {
          gameLog += "*" + "  ";
        }
        else {
          gameLog += board.get(i, j) + "  ";
        }
      }
    }
  }

  this.reset = reset;
  this.putX = putX;
  this.putO = putO;
  this.calculateWeight = calculateWeight;
  this.printBoard = printBoard;
  this.isGameOver = isGameOver;
}

// var stdin = process.openStdin();
// stdin.addListener("data", function(d) {
//   var inputString = d.toString().trim();
//   var row = inputString.split(" ")[0];
//   var column = inputString.split(" ")[1];
//   var set = game.putX(row, column);
//
//   if (!set) {
//     console.log("Row and column were not free. Enter new row and column!");
//     return;
//   }
//
//   var n, m;
//   var weight;
//   for (var i = 0; i < 3; ++i) {
//     for (var j = 0; j < 3; ++j) {
//       var reset = game.putO(i, j);
//       var newWeight = game.calculateWeight("O");
//       if (typeof (weight) == "undefined" || newWeight > weight) {
//         weight = newWeight;
//         n = i;
//         m = j;
//       }
//
//       if (reset) {
//         game.reset(i, j);
//       }
//     }
//   }
//
//   game.putO(n, m);
//   game.printBoard();
//   console.log("");
//
//   if (game.isGameOver()) {
//     console.log("Game over!!!");
//     process.exit();
//   }
//
// });