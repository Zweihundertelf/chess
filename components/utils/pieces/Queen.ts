import Piece from "../Piece";

export default class Queen extends Piece {
  constructor(player: number) {
    super(player);
    this.image =
      player === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }
}
