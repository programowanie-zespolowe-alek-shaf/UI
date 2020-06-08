import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton, TableCell, ButtonGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const BookPreview = ({ book }) => {
  const classes = useAdminPanelStyles();

  return (
    <React.Fragment>
      <TableCell component='th' scope='row' align='center'>
        {book.id}
      </TableCell>
      <TableCell component='th' scope='row' align='center'>
        {book.title}
      </TableCell>
      <TableCell align='center'>{book.author}</TableCell>
      <TableCell align='center'>{book.dateAdded}</TableCell>
      <TableCell align='center'>{book.coverType}</TableCell>
      <TableCell align='center'>{book.price} &nbsp;zł</TableCell>
      <TableCell align='center'>
        <ButtonGroup
          variant='text'
          aria-label='text primary button group'
          size='small'
          disableElevation
        >
          <IconButton>
            <Link
              to={`/admin/book/${book.id}/edit`}
              className={classes.editButton}
            >
              <EditIcon color='action' />
            </Link>
          </IconButton>
          <IconButton>
            <DeleteIcon color='action' />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </React.Fragment>
  );
};

BookPreview.propTypes = {
  book: PropTypes.object,
};

export default BookPreview;
