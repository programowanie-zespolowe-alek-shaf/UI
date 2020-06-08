import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';

import useWithLoadingStyles from './WithLoadingStyles';

const WithLoading = (WrappedComponent) => {
  const wrapped = ({ isLoading, error, ...otherProps }) => {
    const classes = useWithLoadingStyles();
    
    if(isLoading) return (<div className={classes.container}>
      <CircularProgress color='secondary' />
    </div>);

    if(error) return <div>{error}</div>;

    return <WrappedComponent {...otherProps} />;
  };

  wrapped.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  };

  return wrapped;
};

WithLoading.propTypes = {
  WrappedComponent: PropTypes.element,
};

export default WithLoading;
