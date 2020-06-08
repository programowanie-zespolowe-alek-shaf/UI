import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import useAdminPanelLinkStyles from './AdminPanelLinkStyles';

const AdminPanelLink = () => {
  const classes = useAdminPanelLinkStyles();

  return (
    <Link to='/admin' className={classes.container}>
      <Typography variant='subtitle1' className={classes.title}>
        Panel administratora
      </Typography>
    </Link>
  );
};

export default AdminPanelLink;
