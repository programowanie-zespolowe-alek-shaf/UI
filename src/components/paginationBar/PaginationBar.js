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

const PaginationBar = ({ page, pagesCount, baseUrl }) => {
  const classes = usePaginationStyles();

  if (pagesCount > 1) {
    return (
      <Pagination
        page={page}
        size={'large'}
        classes={{ root: classes.root }}
        count={pagesCount}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${baseUrl}/${item.page}`}
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
};

export default PaginationBar;
