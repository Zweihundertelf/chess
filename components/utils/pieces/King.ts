import Piece from "../Piece";

export default class King extends Piece {
  constructor(player: number) {
    super(player);
    this.image =
      player === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }
}
