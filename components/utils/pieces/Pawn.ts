import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Pawn extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
  }
}
