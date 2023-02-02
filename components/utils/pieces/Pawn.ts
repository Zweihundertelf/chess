import Piece from "../Piece";

export default class Pawn extends Piece {
  constructor(player: number) {
    super(player);
    this.image = player === 0 ? "WHITE" : "BLACK";
  }
}
