function Board() {
  var board = { { -1, -1, -1}, { -1, -1, -1}, { -1, -1, -1}};

  function isEmpty(i, j) {
    return board[i, j] === -1;
  }

  function isX(i, j) {
    return board[i, j] === 0;
  }

  function isO(i, j) {
    return board[i, j] === 1;
  }

  function putX(i, j) {
    return board[i, j] = 0;
  }

  function putO(i, j) {
    return board[i, j] = 1;
  }
}
