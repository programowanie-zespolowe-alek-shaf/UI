import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';

const WithLoading = (WrappedComponent) => {
  const wrapped = ({ isLoading, isLoaded, error, ...otherProps }) => {
    if (isLoading) {
      return <CircularProgress color='secondary' />;
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
