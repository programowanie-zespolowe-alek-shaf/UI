import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

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
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserPreview from './components/UserPreview/UserPreview';

const Users = ({ users }) => {
  const commonClasses = useAdminPanelStyles();

  return (
    <Box display='flex' flexDirection='column' width={'100%'}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        className={commonClasses.header}
      >
        <Typography variant='h5' component='h1' className={commonClasses.title}>
          Użytkownicy
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Login</TableCell>
              <TableCell align='center'>Imię</TableCell>
              <TableCell align='center'>Nazwisko</TableCell>
              <TableCell align='center'>Adres e-mail</TableCell>
              <TableCell align='center'>Numer telefonu</TableCell>
              <TableCell align='center'>Uprawnienia</TableCell>
              <TableCell align='center'>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={`admin-user-${index}`}>
                <UserPreview user={user} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

Users.propTypes = {
  books: PropTypes.array,
};

export default withRouter(Users);
