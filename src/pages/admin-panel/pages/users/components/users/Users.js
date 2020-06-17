import React from 'react';
import { withRouter } from 'react-router-dom';

import useAdminPanelStyles from '../../../../AdminPanelStyles';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import UserPreview from '../UserPreview/UserPreview';

const Users = ({ items, onUserDelete }) => {
  const commonClasses = useAdminPanelStyles();
  console.log('users: ', items);
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
            {items.map((user, index) => (
              <TableRow key={`admin-user-${index}`}>
                <UserPreview user={user} onUserDelete={onUserDelete} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withRouter(Users);
