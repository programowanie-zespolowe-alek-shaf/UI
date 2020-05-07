import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';

import useWithLoadingStyles from './WithLoadingStyles';

const WithLoading = (WrappedComponent) => {
  const wrapped = ({ isLoading, isLoaded, error, ...otherProps }) => {
    const classes = useWithLoadingStyles();

    if (isLoading) {
      return (
        <div className={classes.container}>
          <CircularProgress color='secondary' />
        </div>
      );
    } else if (isLoaded) {
      return <WrappedComponent {...otherProps} />;
    } else {
      return <div>{error}</div>;
    }
  };

  wrapped.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  return wrapped;
};

WithLoading.propTypes = {
  WrappedComponent: PropTypes.element,
};

export default WithLoading;
