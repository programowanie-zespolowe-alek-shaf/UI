import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import useAdminPanelStyles from '../../AdminPanelStyles';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import BookPreview from "../books/components/BookPreview/BookPreview";

const Users = ({users}) => {
  const commonClasses = useAdminPanelStyles();

  return (
    <Box display='flex' flexDirection='column'>
      <Box display='flex'
           flexDirection='row'
           alignItems='center'
           className={commonClasses.header}
      >
        <Typography variant='h5' component='h1' className={commonClasses.title}>
          Użytkownicy
        </Typography>

        <Link to='users/add'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            endIcon={<AddIcon/>}
          >
            Dodaj nowego
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Numer użytkownika</TableCell>
              <TableCell align='center'>e-mail</TableCell>
              <TableCell align='center'>Rola</TableCell>
              <TableCell align='center'>Data utworzenia konta</TableCell>
              <TableCell align='center'>Oprawa</TableCell>
              <TableCell align='center'>Cena</TableCell>
              <TableCell align='center'>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((book, index) => (
                <TableRow key={`admin-book-${index}`}>
                  <BookPreview book={book} />
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withRouter(Users);
