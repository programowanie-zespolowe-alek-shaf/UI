import React from 'react';
import styles from './styles/Main.scss';
import Sidebar from './components/sidebar/Sidebar';
import { default as Featured } from './components/featured/FeaturedContainer';
import { default as LastAdded } from './components/lastAdded/LastAddedContainer';

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Featured />
        <LastAdded />
      </div>
    </div>
  );
};

export default Main;
