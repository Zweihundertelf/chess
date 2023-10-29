import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Rook extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';
  }
}
