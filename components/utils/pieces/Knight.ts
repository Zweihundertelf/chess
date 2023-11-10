import { moveKnight } from '@components/utils/Move';
import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Knight extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    if (!moveKnight(selectedPosition, newPosition)) return false;

    return true;
  }
}
