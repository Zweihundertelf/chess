import Player from './Player';

export default abstract class Piece {
  public image: string;

  constructor(public player: Player) {
    this.image = '';
  }
}
