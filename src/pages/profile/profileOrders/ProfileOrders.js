import React from 'react';
import { withRouter } from 'react-router-dom';

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
import useAdminPanelStyles from "../../admin-panel/AdminPanelStyles";
import ProfileOrderPreview from "./ProfileOrderPreview";

const Orders = ({ items, onOrderDelete }) => {
  const commonClasses = useAdminPanelStyles();
  console.log("items", items);
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
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((order, index) => (
              <TableRow key={`admin-order-${index}`}>
                <ProfileOrderPreview order={order} onOrderDelete={onOrderDelete} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withRouter(Orders);
