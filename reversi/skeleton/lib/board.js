var Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  var grid = [];
  for (var i = 0; i < 8; i++) {
    grid.push([]);
    for (var j = 0; j < 8; j++) {
      grid[i].push(0);
    }
  }

  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw "invalid position";
  } else {
    return this.grid[pos[0]][pos[1]];
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos)) {
    return this.grid[pos[0]][pos[1]].color === color;
  }
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return (this.grid[pos[0]][pos[1]] !== 0);
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (!(pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7));
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {

  console.log(piecesToFlip);
  if (!board.isValidPos(pos)) {
    return undefined;
  }

  if (!board.isOccupied(pos)) {
    console.log("empty space");
    return undefined;
  }

  if (board.isOccupied(pos) && board.isMine(pos, color)) {
    return piecesToFlip;
  }

  piecesToFlip.push(pos);

  var nextPos = [pos[0] + dir[0], pos[1] + dir[1]];

  piecesToFlip = _positionsToFlip(board, nextPos, color, dir, piecesToFlip);

  return piecesToFlip;
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  var renderString = "";

  for (var i = 0; i < this.grid.length; i++) {
    for (var j = 0; j < this.grid.length; j++) {
      if (this.grid[i][j] === 0) {
        renderString = renderString.concat('0');
      } else {
        renderString = renderString.concat(this.grid[i][j].toString());
      }
    }
    renderString = renderString.concat("\n");
  }
  console.log(renderString);
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }

  for (var i = 0; i < Board.DIRS.length; i++) {
    var nextPos = [pos[0] + Board.DIRS[i][0], pos[1] + Board.DIRS[i][1]];

    console.log("i:" + i, nextPos);
    console.log(this.isValidPos(nextPos), this.isOccupied(nextPos), !this.isMine(nextPos, color));
    if (this.isValidPos(nextPos) && this.isOccupied(nextPos) && !this.isMine(nextPos, color)) {
      var check = _positionsToFlip(this, nextPos, color, Board.DIRS[i], []);
      console.log(check);
      if (check) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
