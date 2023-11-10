import Piece from './Piece';
import Player from './Player';

export const movePawn = (selectedPosition: [number, number], newPosition: [number, number], figures: (Piece | null)[][], player: Player, isFirstMove: boolean): boolean => {
  if (player === Player.WHITE) {
    if (selectedPosition[0] < newPosition[0]) return false;

    if (selectedPosition[0] - 1 === newPosition[0] && selectedPosition[1] - 1 === newPosition[1] && figures[selectedPosition[0] - 1][selectedPosition[1] - 1] !== null) return true;
    if (selectedPosition[0] - 1 === newPosition[0] && selectedPosition[1] + 1 === newPosition[1] && figures[selectedPosition[0] - 1][selectedPosition[1] + 1] !== null) return true;

    if (selectedPosition[0] - 1 === newPosition[0] && figures[selectedPosition[0] - 1][selectedPosition[1]] !== null) return false;
    if (selectedPosition[0] - 2 === newPosition[0] && figures[selectedPosition[0] - 2][selectedPosition[1]] !== null) return false;
  }
  if (player === Player.BLACK) {
    if (selectedPosition[0] > newPosition[0]) return false;

    if (selectedPosition[0] + 1 === newPosition[0] && selectedPosition[1] + 1 === newPosition[1] && figures[selectedPosition[0] + 1][selectedPosition[1] + 1] !== null) return true;
    if (selectedPosition[0] + 1 === newPosition[0] && selectedPosition[1] - 1 === newPosition[1] && figures[selectedPosition[0] + 1][selectedPosition[1] - 1] !== null) return true;

    if (selectedPosition[0] + 1 === newPosition[0] && figures[selectedPosition[0] + 1][selectedPosition[1]] !== null) return false;
    if (selectedPosition[0] + 2 === newPosition[0] && figures[selectedPosition[0] + 2][selectedPosition[1]] !== null) return false;
  }

  if (selectedPosition[1] !== newPosition[1]) return false;

  if (figures[selectedPosition[0] + 1][selectedPosition[1]] === null || figures[selectedPosition[0] - 1][selectedPosition[1]] === null) {
    if (isFirstMove && (selectedPosition[0] + 2 === newPosition[0] || selectedPosition[0] - 2 === newPosition[0])) return true;
  }

  if (selectedPosition[0] + 1 === newPosition[0] || selectedPosition[0] - 1 === newPosition[0]) return true;

  return false;
};

export const moveRook = (selectedPosition: [number, number], newPosition: [number, number]): boolean => {
  if (newPosition[0] === selectedPosition[0] || newPosition[1] === selectedPosition[1]) return true;

  return false;
};

export const moveKnight = (selectedPosition: [number, number], newPosition: [number, number]): boolean => {
  if ((newPosition[0] === selectedPosition[0] + 2 && newPosition[1] === selectedPosition[1] - 1) || (newPosition[0] === selectedPosition[0] + 2 && newPosition[1] === selectedPosition[1] + 1))
    return true;
  if ((newPosition[0] === selectedPosition[0] - 2 && newPosition[1] === selectedPosition[1] - 1) || (newPosition[0] === selectedPosition[0] - 2 && newPosition[1] === selectedPosition[1] + 1))
    return true;
  if ((newPosition[0] === selectedPosition[0] + 1 && newPosition[1] === selectedPosition[1] - 2) || (newPosition[0] === selectedPosition[0] - 1 && newPosition[1] === selectedPosition[1] + 2))
    return true;
  if ((newPosition[0] === selectedPosition[0] + 1 && newPosition[1] === selectedPosition[1] + 2) || (newPosition[0] === selectedPosition[0] - 1 && newPosition[1] === selectedPosition[1] - 2))
    return true;

  return false;
};

export const moveBishop = (selectedPosition: [number, number], newPosition: [number, number]): boolean => {
  if (selectedPosition[0] - newPosition[0] === selectedPosition[1] - newPosition[1]) return true;
  if (selectedPosition[0] + selectedPosition[1] === newPosition[0] + newPosition[1]) return true;
  if (selectedPosition[0] - newPosition[0] === selectedPosition[1] - newPosition[1]) return true;

  return false;
};

export const moveQueen = (selectedPosition: [number, number], newPosition: [number, number]): boolean => {
  if (newPosition[0] === selectedPosition[0] || newPosition[1] === selectedPosition[1]) return true;

  if (selectedPosition[0] - newPosition[0] === selectedPosition[1] - newPosition[1]) return true;
  if (selectedPosition[0] + selectedPosition[1] === newPosition[0] + newPosition[1]) return true;
  if (selectedPosition[0] - newPosition[0] === selectedPosition[1] - newPosition[1]) return true;

  return false;
};
