import Piece from './Piece';
import Player from './Player';

import Pawn from './pieces/Pawn';

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

  return figures;
};

export default startPosition;
