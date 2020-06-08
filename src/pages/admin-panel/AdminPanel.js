import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { sidebar } from 'global/constants/adminPanel';
import {
  ADMIN_PAGE,
  ADMIN_PAGE_ORDERS,
  ADMIN_PAGE_USERS,
  ADMIN_PAGE_BOOKS,
} from 'global/constants/pages';
import { Box } from '@material-ui/core';

import PrivateRoute from 'components/privateRoute/PrivateRoute';
import Sidebar from 'components/sidebar/Sidebar';
import Books from './components/books/Books';
import Orders from './components/orders/Orders';
import Users from './components/users/Users';

import useAdminPanelStyles from './AdminPanelStyles';

const AdminPanel = () => {
  const classes = useAdminPanelStyles();

  return (
    <Box className={classes.container}>
      <Sidebar
        title={sidebar.title}
        items={sidebar.items}
        baseItemUrl={ADMIN_PAGE}
      />
      <Switch>
        <Route
          exact
          path={[ADMIN_PAGE, ADMIN_PAGE_ORDERS]}
          component={Orders}
        />
        <Route exact path={ADMIN_PAGE_USERS} component={Users} />
        <Route exact path={ADMIN_PAGE_BOOKS} component={Books} />
      </Switch>
    </Box>
  );
};

export default AdminPanel;
