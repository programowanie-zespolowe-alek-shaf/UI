import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TableCell, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useAdminPanelStyles from "../../admin-panel/AdminPanelStyles";


const OrderPreview = ({ order, onOrderDelete }) => {
  const classes = useAdminPanelStyles();

  return (
    <React.Fragment>
      <TableCell align='center'>{order.id}</TableCell>
      <TableCell align='center'>{order.shoppingCardId}</TableCell>
      <TableCell align='center'>{order.address}</TableCell>
      <TableCell align='center'>{order.shipDate}</TableCell>
      <TableCell align='center'>{order.status}</TableCell>
      {/*<TableCell align='center'>*/}
        {/*<ButtonGroup*/}
        {/*  variant='text'*/}
        {/*  aria-label='text primary button group'*/}
        {/*  size='small'*/}
        {/*>*/}
        {/*  <Button>*/}
        {/*    <Link*/}
        {/*      to={`/profile/order/${order.id}`}*/}
        {/*      className={classes.linkButton}*/}
        {/*    >*/}
        {/*      <MoreHorizIcon color='action' />*/}
        {/*    </Link>*/}
        {/*  </Button>*/}
        {/*</ButtonGroup>*/}
      {/*</TableCell>*/}
    </React.Fragment>
  );
};

OrderPreview.propTypes = {
  order: PropTypes.object,
};

export default OrderPreview;
