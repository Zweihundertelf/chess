import Piece from "../Piece";

export default class Rook extends Piece {
  constructor(player: number) {
    super(player);
    this.image =
      player === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }
}
