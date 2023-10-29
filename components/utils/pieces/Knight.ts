import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Knight extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';
  }
}
