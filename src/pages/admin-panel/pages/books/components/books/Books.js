import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { ADMIN_PAGE_BOOKS_ADD } from 'global/constants/pages';

import {
  Typography,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import BookPreview from '../bookPreview/BookPreview';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const Books = ({ items, onBookDelete }) => {
  const commonClasses = useAdminPanelStyles();

  console.log('Books items', items);

  return (
    <Box display='flex' flexDirection='column' width={'100%'}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        className={commonClasses.header}
      >
        <Typography variant='h5' component='h1' className={commonClasses.title}>
          Książki
        </Typography>

        <Link to={ADMIN_PAGE_BOOKS_ADD}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            endIcon={<AddIcon />}
          >
            Dodaj nową
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>Tytuł</TableCell>
              <TableCell align='center'>Autor</TableCell>
              <TableCell align='center'>Data dodania</TableCell>
              <TableCell align='center'>Oprawa</TableCell>
              <TableCell align='center'>Cena</TableCell>
              <TableCell align='center'>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((book, index) => (
              <TableRow key={`admin-book-${index}`}>
                <BookPreview book={book} onDelete={onBookDelete} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

Books.propTypes = {
  items: PropTypes.array,
  onBookDelete: PropTypes.func,
};

export default withRouter(Books);
