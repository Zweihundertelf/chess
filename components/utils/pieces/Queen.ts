import { moveQueen } from '@components/utils/Move';
import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';
import addValidPosition from '@components/utils/validPositions';

export default class Queen extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    if (!moveQueen(selectedPosition, newPosition)) return false;

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

    if (newPosition[1] > selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [0, 1], this.player, figures);
    }
    if (newPosition[1] < selectedPosition[1]) {
      return addValidPosition(selectedPosition, newPosition, [0, -1], this.player, figures);
    }

    if (newPosition[0] > selectedPosition[0]) {
      return addValidPosition(selectedPosition, newPosition, [1, 0], this.player, figures);
    }
    if (newPosition[0] < selectedPosition[0]) {
      return addValidPosition(selectedPosition, newPosition, [-1, 0], this.player, figures);
    }

    return false;
  }
}
