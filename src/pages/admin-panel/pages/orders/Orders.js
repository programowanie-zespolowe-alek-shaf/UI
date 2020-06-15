import React from 'react';
import { withRouter } from 'react-router-dom';

import useAdminPanelStyles from '../../AdminPanelStyles';
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
import OrderPreview from './components/OrderPreview/OrderPreview';

const Orders = ({ items }) => {
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
          Zamówienia
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>ID Koszyka</TableCell>
              <TableCell align='center'>Adres dostawy</TableCell>
              <TableCell align='center'>Data dostawy</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((order, index) => (
              <TableRow key={`admin-order-${index}`}>
                <OrderPreview order={order} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withRouter(Orders);
