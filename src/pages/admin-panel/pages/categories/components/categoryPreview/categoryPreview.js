import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, ButtonGroup, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const CategoryPreview = ({ category, onDelete }) => {
  return (
    <React.Fragment>
      <TableCell scope='row' align='center'>
        {category.id}
      </TableCell>
      <TableCell scope='row' align='center'>
        {category.name}
      </TableCell>
      <TableCell align='center'>
        <ButtonGroup
          variant='text'
          aria-label='text primary button group'
          size='small'
        >
          <Button>
            <DeleteIcon
              color='action'
              onClick={() => onDelete(category.id, category.name)}
            />
          </Button>
        </ButtonGroup>
      </TableCell>
    </React.Fragment>
  );
};

CategoryPreview.propTypes = {
  category: PropTypes.object,
  onDelete: PropTypes.func,
};

export default CategoryPreview;
