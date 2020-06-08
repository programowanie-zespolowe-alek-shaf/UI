import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TableCell, ButtonGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const BookPreview = ({ book }) => {
  console.log(book);
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
          fullwidth
        >
          <IconButton color='textprimary'>
            <EditIcon />
          </IconButton>
          <IconButton color='textsecondary'>
            <DeleteIcon />
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
