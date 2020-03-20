import React from 'react';
import PropTypes from 'prop-types';
import styles from './iconButton.scss';

const IconButton = (props) => (
  <div className={styles.button } onClick={props.onClick}>
    {props.children}
  </div>
);

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default IconButton;