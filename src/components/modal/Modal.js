import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import styles from './modal.scss';


const Modal = (props) => {

  const appliedStyles = props.isOpen ? (styles.modalContainer)  : (styles.modalHidden);

  return (
    <div className={appliedStyles}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Icon width={20} height={20} type="close" onClick={props.onClose} />
          </div>
        </div>
        {props.isOpen ? props.children : ''}
      </div>
    </div>);
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
