'use client';
import React, { HTMLAttributes } from 'react';

import styles from './board.module.scss';

const vertical: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();
const horizontal: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const renderDescription = (description: string[]) => {
  return description.map((desc: string, i: number) => <span key={i}>{desc}</span>);
};

const getChessboardField = (fieldIndex: number) => (fieldIndex % 2 !== 0 ? styles.blackField : styles.whiteField);

interface BoardInterface extends HTMLAttributes<HTMLDivElement> {
  width: number;
}

const Board = ({ width, ...props }: BoardInterface) => {
  return (
    <div {...props} className={[styles.chessboard, props.className].join(' ')} style={{ width: `${width}rem` }}>
      <React.Fragment>
        <div className={[styles.description, styles.descriptionHorizontal].join(' ')}>{renderDescription(horizontal)}</div>
        <div className={[styles.description, styles.descriptionVertical].join(' ')}>{renderDescription(vertical)}</div>
      </React.Fragment>
      <div className={styles.board}>{horizontal.map((_, h) => vertical.map((_, v) => <div className={getChessboardField(h + v)} key={h + v * 8}></div>))}</div>
      <React.Fragment>
        <div className={[styles.description, styles.descriptionHorizontal].join(' ')}>{renderDescription(horizontal)}</div>
        <div className={[styles.description, styles.descriptionVertical].join(' ')}>{renderDescription(vertical)}</div>
      </React.Fragment>
    </div>
  );
};

export default Board;
