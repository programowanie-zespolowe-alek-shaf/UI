import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './Main.scss';
import Sidebar from './components/sidebar/Sidebar';
import { getCategories } from '../category/slice/categoriesSlice';
import { default as Featured } from './components/featured/FeaturedContainer';
import { default as LastAdded } from './components/lastAdded/LastAddedContainer';
import messages from '../category/messages/messages';

const Main = () => {
  const categories = useSelector(state => state.categories, shallowEqual);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar items={categories.items} title={messages.kategorie} />
      </div>
      <div className={styles.content}>
        {/* <Featured />
        <LastAdded /> */}
      </div>
    </div>
  );
};

export default Main;
