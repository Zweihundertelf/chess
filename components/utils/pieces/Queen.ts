import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Queen extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
  }
}
