import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class King extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    return true;
  }
}
