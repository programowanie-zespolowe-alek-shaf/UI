import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TableCell, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const BookPreview = ({ book, onDelete }) => {
  const classes = useAdminPanelStyles();

  return (
    <React.Fragment>
      <TableCell scope='row' align='center'>
        {book.id}
      </TableCell>
      <TableCell scope='row' align='center'>
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
        >
          <Button>
            <Link to={`/admin/book/${book.id}`} className={classes.linkButton}>
              <MoreHorizIcon color='action' />
            </Link>
          </Button>
          <Button>
            <Link
              to={`/admin/book/${book.id}/edit`}
              className={classes.linkButton}
            >
              <EditIcon color='action' />
            </Link>
          </Button>
          <Button>
            <DeleteIcon
              color='action'
              onClick={() => onDelete(book.id, book.title)}
            />
          </Button>
        </ButtonGroup>
      </TableCell>
    </React.Fragment>
  );
};

BookPreview.propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func,
};

export default BookPreview;
