import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const usePaginationStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3rem 0',
  },
}));

const PaginationBar = ({ page, pagesCount, baseUrl, afterBaseUrl }) => {
  const classes = usePaginationStyles();

  if (pagesCount > 1) {
    return (
      <Pagination
        page={page ? page : 1}
        size={'large'}
        classes={{ root: classes.root }}
        count={pagesCount}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${baseUrl}/${item.page}${afterBaseUrl ? afterBaseUrl : ''}`}
            {...item}
          />
        )}
      />
    );
  } else {
    return null;
  }
};

PaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  baseUrl: PropTypes.string.isRequired,
  afterBaseUrl: PropTypes.string,
};

export default PaginationBar;
