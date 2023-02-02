"use client";

import { useState } from "react";
import startPosition from "../utils/startPosition";
import styles from "./board.module.scss";

const vertical: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();
const horizontal: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

const renderDescription = (description: string[]) => {
  return description.map((desc) => <div key={desc}>{desc}</div>);
};

const getChessboardField = (fieldIndex: number) => (fieldIndex % 2 !== 0 ? styles.blackField : styles.whiteField);

const Board = () => {
  const [figures, setFigures] = useState(startPosition());

  return (
    <div className={styles.chessboard}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.descriptionVertical} style={{ left: 0 }}>
          {renderDescription(vertical)}
        </div>
        <div className={styles.descriptionVertical} style={{ right: 0 }}>
          {renderDescription(vertical)}
        </div>
      </div>
      <div className={styles.board}>
        {vertical.map((_, v) =>
          horizontal.map((_, h) => (
            <div className={getChessboardField(v + h)} key={v + h * 8}>
              {figures[v][h]?.player}
            </div>
          ))
        )}
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.descriptionHorizontal} style={{ top: 0 }}>
          {renderDescription(vertical)}
        </div>
        <div className={styles.descriptionHorizontal} style={{ bottom: 0 }}>
          {renderDescription(vertical)}
        </div>
      </div>
    </div>
  );
};

export default Board;
