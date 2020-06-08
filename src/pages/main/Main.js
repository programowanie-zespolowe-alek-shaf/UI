import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './Main.scss';
import Sidebar from 'components/sidebar/Sidebar';
import { default as Featured } from './components/featured/FeaturedContainer';
import { default as LastAdded } from './components/lastAdded/LastAddedContainer';
import { CATEGORY_PAGE } from 'global/constants/pages';
import messages from '../category/messages/messages';

const Main = () => {
  const categories = useSelector((state) => state.categories, shallowEqual);
  return (
    <div className={styles.container}>
      <Sidebar
        items={categories.items}
        title={messages.kategorie}
        baseItemUrl={CATEGORY_PAGE}
      />
      <div className={styles.content}>
        <Featured />
        <LastAdded />
      </div>
    </div>
  );
};

export default Main;
