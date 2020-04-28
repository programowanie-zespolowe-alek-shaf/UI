import React from 'react';
import styles from './Main.scss';
import { default as Pagination } from '../../components/pagination/PaginationContainer';

const Main = () => {
  console.log('Halko!');
  return (
    <div className={styles.main}>
      <Pagination />
    </div>
  );
};

export default Main;
