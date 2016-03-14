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
    return get(i, j) === "";
  }

  function get(i, j) {
    return board[i][j];
  }

  function set(i, j, value) {
    board[i][j] = value;
  }
}

function Game() {
  var board = new Board();

  function putX(i, j) {
    if (board.isEmpty(i, j)) {
      board.ser(i, j, "X");
    }
  }

  function putO(i, j) {
    if (board.isEmpty(i, j)) {
      board.ser(i, j, "O");
    }
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
          ++empty;
        }
        else if (board.get(j, i) === c) {
          ++good;
        }
        else {
          ++bad;
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
        weight -= 50;
      }
      else if (bad === 1 && empty === 2) {
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
      weight -= 50;
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
      weight -= 50;
    }
    else if (badReverseCross === 1 && emptyReverseCross === 2) {
      weight -= 2;
    }
  }

}
