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
import OrderPreview from './components/OrderPreview/OrderPreview';

const Orders = ({ orders }) => {
  const commonClasses = useAdminPanelStyles();

  return (
    <Box display='flex' flexDirection='column'>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        className={commonClasses.header}
      >
        <Typography variant='h5' component='h1' className={commonClasses.title}>
          Zamówienia
        </Typography>

        <Link to='orders/add'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            endIcon={<AddIcon />}
          >
            Dodaj nowe
          </Button>
        </Link>
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
            {orders.map((order, index) => (
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

Orders.propTypes = {
  books: PropTypes.array,
};

export default withRouter(Orders);
