import React, { Component } from 'react';
import styles from './notFound.scss';

class NotFound extends Component {
  render() {
    return (<div className={styles.container || 'notFound__container'}>
      <span className={styles.title || 'notFound__title'}>
        Ops, 404 Not found
      </span>
    </div>);
  }
}

export default NotFound;
