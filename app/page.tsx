import React from 'react';
import Board from '../components/board/Board';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <React.Fragment>
      <div className={styles.heading}>
        <h1>Chess Game</h1>
      </div>
      <Board />
    </React.Fragment>
  );
};

export default IndexPage;
