import Piece from "../Piece";

export default class Pawn extends Piece {
  constructor(player: number) {
    super(player);
    this.image =
      player === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }
}
