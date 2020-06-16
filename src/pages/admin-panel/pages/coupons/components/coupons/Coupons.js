import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { ADMIN_PAGE_COUPON_ADD } from 'global/constants/pages';

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

import CouponPreview from '../couponPreview/CouponPreview';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const Coupons = ({ items, onCouponDelete }) => {
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
          Kupony
        </Typography>

        <Link to={ADMIN_PAGE_COUPON_ADD}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            endIcon={<AddIcon />}
          >
            Dodaj nowy
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>Nazwa</TableCell>
              <TableCell align='center'>{'Zniżka (%)'}</TableCell>
              <TableCell align='center'>Pozostała ilość</TableCell>
              <TableCell align='center'>Akcje</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((coupon, index) => (
              <TableRow key={`admin-coupon-${index}`}>
                <CouponPreview coupon={coupon} onDelete={onCouponDelete} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

Coupons.propTypes = {
  items: PropTypes.array,
  onCouponDelete: PropTypes.func,
};

export default withRouter(Coupons);
