'use client';
import React, { HTMLAttributes, useState } from 'react';

import Piece from '@components/utils/Piece';
import Player from '@components/utils/Player';
import King from '@components/utils/pieces/King';
import startPosition from '@components/utils/startPosition';
import { BoardPosition } from '@components/utils/types';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import styles from './board.module.scss';

const vertical: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();
const horizontal: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const renderDescription = (description: string[]) => {
  return description.map((desc: string, i: number) => <span key={i}>{desc}</span>);
};

const getChessboardField = (fieldIndex: number) => (fieldIndex % 2 !== 0 ? styles.blackField : styles.whiteField);
const isSelectedField = (fieldPosition: [number, number], selectedPosition: number[] | null) =>
  selectedPosition !== null ? fieldPosition[0] === selectedPosition[0] && fieldPosition[1] === selectedPosition[1] : null;

type BoardInterface = HTMLAttributes<HTMLDivElement>;

const Board = ({ ...props }: BoardInterface) => {
  const [figures, setFigures] = useState(startPosition());
  const [selectedPosition, setSelectedPosition] = useState<BoardPosition | null>(null);
  const [activePlayer, setActivePlayer] = useState<Player | null>(Player.WHITE);

  const handleClick = (x: number, y: number, selectedPiece: Piece | null) => {
    if (selectedPosition && selectedPosition[0] === x && selectedPosition[1] === y) return setSelectedPosition(null);
    if (selectedPiece && selectedPiece.player === activePlayer) return setSelectedPosition([x, y]);

    if (!selectedPosition) return;

    if (!isMovePossible(selectedPosition, [x, y])) return;

    if (figures[x][y] instanceof King) {
      toast(`${activePlayer ? 'Black' : 'White'} wins`, {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setActivePlayer(null);
      movePiece(selectedPosition, [x, y]);
      return;
    }

    switchActivePlayer();
    movePiece(selectedPosition, [x, y]);
  };

  const handleReset = () => {
    setFigures(startPosition());
    setSelectedPosition(null);
    setActivePlayer(Player.WHITE);
  };

  const movePiece = (startPosition: BoardPosition, endPosition: BoardPosition) => {
    figures[endPosition[0]][endPosition[1]] = figures[startPosition[0]][startPosition[1]];
    figures[startPosition[0]][startPosition[1]] = null;
    setSelectedPosition(null);
    setFigures(figures);
  };

  const isMovePossible = (activePosition: [number, number], newPosition: [number, number]) => {
    if (figures[activePosition[0]][activePosition[1]]?.movePossible(activePosition, newPosition, figures)) return true;
  };

  const switchActivePlayer = () => {
    activePlayer === Player.WHITE ? setActivePlayer(Player.BLACK) : setActivePlayer(Player.WHITE);
  };

  return (
    <React.Fragment>
      {activePlayer === null ? (
        <div className={styles.option}>
          <button onClick={handleReset}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
        </div>
      ) : null}
      <div {...props} className={[styles.chessboard, props.className].join(' ')}>
        <Toaster position="top-center" />
        <React.Fragment>
          <div className={[styles.description, styles.descriptionHorizontal].join(' ')}>{renderDescription(horizontal)}</div>
          <div className={[styles.description, styles.descriptionVertical].join(' ')}>{renderDescription(vertical)}</div>
        </React.Fragment>
        <div className={styles.board}>
          {horizontal.map((_, h) =>
            vertical.map((_, v) => (
              <div className={isSelectedField([h, v], selectedPosition) ? styles.selected : getChessboardField(h + v)} onClick={() => handleClick(h, v, figures[h][v])} key={h + v * 8}>
                {figures[h][v]?.image ? <Image src={figures[h][v]?.image!} fill alt="no_piece" /> : null}
              </div>
            ))
          )}
        </div>
        <React.Fragment>
          <div className={[styles.description, styles.descriptionHorizontal].join(' ')}>{renderDescription(horizontal)}</div>
          <div className={[styles.description, styles.descriptionVertical].join(' ')}>{renderDescription(vertical)}</div>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default Board;
