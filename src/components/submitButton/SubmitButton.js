import React from 'react';
import PropTypes from 'prop-types';

import { Button, CircularProgress } from '@material-ui/core';

import useSubmitButtonStyles from './SubmitButtonStyles';

const SubmitButton = ({ children, isLoading, ...props }) => {
  const classes = useSubmitButtonStyles();

  return (
    <Button type='submit' {...props}>
      {isLoading ? (
        <CircularProgress className={classes.spinner} size={28} />
      ) : (
        children
      )}
    </Button>
  );
};

SubmitButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SubmitButton;
