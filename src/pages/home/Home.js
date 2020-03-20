import React from 'react';
import { messages } from './messages/messages';
import styles from './home.scss';

const Home = (props) => {
  
  return (<div className={styles.home}>
    <span className={styles.title}>{messages.headerTitleCase}</span>
  </div>);
};

export default Home;
