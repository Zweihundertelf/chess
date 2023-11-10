import { moveBishop } from '@components/utils/Move';
import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';
import addValidPosition from '@components/utils/validPositions';

export default class Bishop extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    if (!moveBishop(selectedPosition, newPosition)) return false;

    if (this.canMovePiece(selectedPosition, newPosition, figures)) return true;

    return false;
  }

  canMovePiece(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    if (newPosition[0] > selectedPosition[0] && newPosition[1] > selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [1, 1], this.player, figures);
    }
    if (newPosition[0] < selectedPosition[0] && newPosition[1] < selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [-1, -1], this.player, figures);
    }

    if (newPosition[0] > selectedPosition[0] && newPosition[1] < selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [1, -1], this.player, figures);
    }
    if (newPosition[0] < selectedPosition[0] && newPosition[1] > selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [-1, 1], this.player, figures);
    }

    return false;
  }
}
