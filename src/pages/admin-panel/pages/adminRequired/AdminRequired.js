import React from 'react';
import styles from './adminRequired.scss';
import Img from 'react-image';
import admin from '../../../../global/icons/admin.svg';

function AdminRequired() {
  return (
    <div className={styles.container}>
      <Img src={admin} width={300} height={300} />
    </div>
  );
}

export default AdminRequired;