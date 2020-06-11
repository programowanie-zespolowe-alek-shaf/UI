import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { sidebar } from 'global/constants/adminPanel';
import {
  ADMIN_PAGE,
  ADMIN_PAGE_ORDERS,
  ADMIN_PAGE_BOOK,
  ADMIN_PAGE_BOOK_EDIT,
  ADMIN_PAGE_BOOKS,
  ADMIN_PAGE_BOOKS_ADD,
  ADMIN_PAGE_USER,
  ADMIN_PAGE_USER_EDIT,
  ADMIN_PAGE_USERS,
  ADMIN_PAGE_USERS_ADD,
} from 'global/constants/pages';
import { Box } from '@material-ui/core';

import Sidebar from 'components/sidebar/Sidebar';
import { default as Books } from './pages/books/BooksContainer';
import { default as Book } from './pages/book/BookContainer';
import { default as Users } from './pages/users/UsersContainer';
import { default as User } from './pages/user/UserContainer';
import Orders from './pages/orders/OrdersContainer';
// import Users from './pages/users/Users';

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
      <Box className={classes.content}>
        <Switch>
          <Route
            exact
            path={[ADMIN_PAGE, ADMIN_PAGE_ORDERS]}
            component={Orders}
          />
          <Route exact path={ADMIN_PAGE_BOOKS} component={Books} />
          <Route exact path={ADMIN_PAGE_BOOK} component={Book} />
          <Route exact path={ADMIN_PAGE_BOOK_EDIT} component={Book} />
          <Route exact path={ADMIN_PAGE_BOOKS_ADD} component={Book} />
          <Route exact path={ADMIN_PAGE_USER} component={User} />
          <Route exact path={ADMIN_PAGE_USER_EDIT} component={User} />
          <Route exact path={ADMIN_PAGE_USERS} component={Users} />
          <Route exact path={ADMIN_PAGE_USERS_ADD} component={User} />
        </Switch>
      </Box>
    </Box>
  );
};

export default AdminPanel;
