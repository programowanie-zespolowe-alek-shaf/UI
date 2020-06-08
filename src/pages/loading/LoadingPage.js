import React from 'react';
import styles from './loadingPage.scss';
import { CircularProgress } from '@material-ui/core';

function LoadingPage(props) {
  return (
    <div className={styles.container}>
      <CircularProgress color='secondary' />
    </div>
  );
}

export default LoadingPage;
