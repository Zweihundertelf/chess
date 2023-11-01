import { movePawn } from '@components/utils/Move';
import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';

export default class Pawn extends Piece {
  private isFirstMove: boolean;

  constructor(player: number) {
    super(player);
    this.image = player === Player.WHITE ? 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
    this.isFirstMove = true;
  }

  movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean {
    if (!movePawn(selectedPosition, newPosition, figures, this.player, this.isFirstMove)) return false;
    if (this.isFirstMove) this.isFirstMove = false;

    return true;
  }
}
