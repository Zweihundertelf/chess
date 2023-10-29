import Piece from './Piece';
import Player from './Player';

import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';

const startPosition = () => {
  const figures: (Piece | null)[][] = Array.from(Array(8), () => new Array(8));

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      figures[i][j] = null;
    }
  }

  for (let i = 0; i < 8; i++) {
    figures[1][i] = new Pawn(Player.BLACK);
    figures[6][i] = new Pawn(Player.WHITE);
  }

  figures[0][0] = new Rook(Player.BLACK);
  figures[0][7] = new Rook(Player.BLACK);
  figures[7][0] = new Rook(Player.WHITE);
  figures[7][7] = new Rook(Player.WHITE);

  figures[0][1] = new Knight(Player.BLACK);
  figures[0][6] = new Knight(Player.BLACK);
  figures[7][1] = new Knight(Player.WHITE);
  figures[7][6] = new Knight(Player.WHITE);

  figures[0][2] = new Bishop(Player.BLACK);
  figures[0][5] = new Bishop(Player.BLACK);
  figures[7][2] = new Bishop(Player.WHITE);
  figures[7][5] = new Bishop(Player.WHITE);

  figures[0][3] = new Queen(Player.BLACK);
  figures[7][3] = new Queen(Player.WHITE);

  figures[0][4] = new King(Player.BLACK);
  figures[7][4] = new King(Player.WHITE);

  return figures;
};

export default startPosition;
