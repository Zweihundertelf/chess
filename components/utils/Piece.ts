import Player from './Player';

export default abstract class Piece {
  public image: string;

  constructor(public player: Player) {
    this.image = '';
  }

  abstract movePossible(selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][]): boolean;
}
