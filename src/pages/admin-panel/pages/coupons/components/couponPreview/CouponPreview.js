import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TableCell, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useAdminPanelStyles from '../../../../AdminPanelStyles';

const CouponPreview = ({ coupon, onDelete }) => {
  const classes = useAdminPanelStyles();

  return (
    <React.Fragment>
      <TableCell scope='row' align='center'>
        {coupon.id}
      </TableCell>
      <TableCell scope='row' align='center'>
        {coupon.code}
      </TableCell>
      <TableCell align='center'>{coupon.discountMultiplayer * 100}</TableCell>
      <TableCell align='center'>{coupon.amountLeft}</TableCell>
      <TableCell align='center'>
        <ButtonGroup
          variant='text'
          aria-label='text primary button group'
          size='small'
        >
          <Button>
            <Link
              to={`/admin/coupon/${coupon.id}/edit`}
              className={classes.linkButton}
            >
              <EditIcon color='action' />
            </Link>
          </Button>
          <Button>
            <DeleteIcon
              color='action'
              onClick={() => onDelete(coupon.id, coupon.code)}
            />
          </Button>
        </ButtonGroup>
      </TableCell>
    </React.Fragment>
  );
};

CouponPreview.propTypes = {
  coupon: PropTypes.object,
  onDelete: PropTypes.func,
};

export default CouponPreview;
