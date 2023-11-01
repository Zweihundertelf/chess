import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Bishop extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    return true;
  }
}
