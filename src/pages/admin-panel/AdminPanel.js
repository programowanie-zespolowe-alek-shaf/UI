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
  ADMIN_PAGE_ORDER,
} from 'global/constants/pages';
import { Box } from '@material-ui/core';

import Sidebar from 'components/sidebar/Sidebar';
import { default as Books } from './pages/books/BooksContainer';
import AddBook from './pages/book/pages/addBook/AddBook';
import EditBook from './pages/book/pages/editBook/EditBook';
import { default as Users } from './pages/users/UsersContainer';
import { default as UserDetails } from './pages/user/userDetails/UserDetailsContainer';
import { default as BookDetails } from './pages/book/pages/bookDetails/BookDetailsContainer';

import Orders from './pages/orders/OrdersContainer';
import Order from './pages/order/orderDetails/OrderDetailsContainer';

import useAdminPanelStyles from './AdminPanelStyles';

const AdminPanel = () => {
  const classes = useAdminPanelStyles();

  return (
    <Box className={classes.container} mb={4}>
      <Sidebar
        title={sidebar.title}
        items={sidebar.items}
        baseItemUrl={ADMIN_PAGE}
      />
      <Box className={classes.content}>
        <Switch>
          <Route
            exact
            path={[`${ADMIN_PAGE}/:pageId`, `${ADMIN_PAGE_ORDERS}/:pageId?`]}
            component={Orders}
          />
          <Route
            exact
            path={`${ADMIN_PAGE_ORDER}/:pageId?`}
            component={Order}
          />
          <Route
            exact
            path={`${ADMIN_PAGE_BOOKS}/:pageId?`}
            component={Books}
          />
          <Route exact path={ADMIN_PAGE_BOOK} component={BookDetails} />
          <Route exact path={ADMIN_PAGE_BOOK_EDIT} component={EditBook} />
          <Route exact path={ADMIN_PAGE_BOOKS_ADD} component={AddBook} />
          <Route exact path={ADMIN_PAGE_USER} component={UserDetails} />
          <Route exact path={ADMIN_PAGE_USER_EDIT} component={UserDetails} />
          <Route
            exact
            path={`${ADMIN_PAGE_USERS}/:pageId?`}
            component={Users}
          />
        </Switch>
      </Box>
    </Box>
  );
};

export default AdminPanel;
