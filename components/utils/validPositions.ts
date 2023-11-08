import Piece from './Piece';
import Player from './Player';

function arrayMatch(arr1: [number, number], arr2: [number, number]) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const checkValidPosition = (startPosition: [number, number], step: [number, number], player: Player, figures: (Piece | null)[][]) => {
  const validPositions: Array<[number, number]> = [];

  for (let i = 1; i < 8; i++) {
    const position: [number, number] = [startPosition[0] + step[0] * i, startPosition[1] + step[1] * i];

    if (position[0] < 0 || position[0] >= 8) {
      break;
    } else if (position[1] < 0 || position[1] >= 8) {
      break;
    }

    const figureAtPosition = figures[position[0]][position[1]];
    if (figureAtPosition === null) {
      validPositions.push(position);
    } else if (figureAtPosition.player === player) {
      break;
    } else {
      validPositions.push(position);
      break;
    }
  }

  return validPositions;
};

const addValidPosition = (startPosition: [number, number], endPosition: [number, number], step: [number, number], player: Player, figures: (Piece | null)[][]): boolean => {
  const validPositions: Array<[number, number]> = checkValidPosition(startPosition, step, player, figures);

  for (let i = 0; i < validPositions.length + 1; i++) {
    if (arrayMatch([endPosition[0], endPosition[1]], [startPosition[0] + step[0] * i, startPosition[1] + step[1] * i])) return true;
  }
  return false;
};

export default addValidPosition;
