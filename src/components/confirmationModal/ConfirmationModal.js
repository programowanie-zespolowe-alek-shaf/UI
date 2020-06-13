import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

const ConfirmationModal = ({
  isOpen,
  setOpen,
  title,
  text,
  aggreeText,
  cancelText,
  aggreeCallback,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      aria-labelledby={`modal-${title}-title`}
      aria-describedby={`modal-${title}-description`}
    >
      <DialogTitle id={`modal-${title}-title`}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id={`modal-${title}-description`}>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color='primary'>
          {cancelText}
        </Button>
        <Button onClick={aggreeCallback} color='primary' autoFocus>
          {aggreeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  aggreeText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  aggreeCallback: PropTypes.func.isRequired,
};

export default ConfirmationModal;
