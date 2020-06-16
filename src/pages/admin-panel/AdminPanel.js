import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { sidebar } from 'global/constants/adminPanel';
import {
  ADMIN_PAGE,
  ADMIN_PAGE_BOOK,
  ADMIN_PAGE_BOOK_EDIT,
  ADMIN_PAGE_BOOKS,
  ADMIN_PAGE_BOOKS_ADD,
  ADMIN_PAGE_USER,
  ADMIN_PAGE_USER_EDIT,
  ADMIN_PAGE_USERS,
  ADMIN_PAGE_ORDER,
  ADMIN_PAGE_ORDER_EDIT,
  ADMIN_PAGE_ORDER_ADD,
  ADMIN_PAGE_ORDERS,
  ADMIN_PAGE_CATEGORIES,
  ADMIN_PAGE_CATEGORY_ADD,
  ADMIN_PAGE_COUPONS,
  ADMIN_PAGE_COUPON_EDIT,
  ADMIN_PAGE_COUPON_ADD,
} from 'global/constants/pages';
import { Box } from '@material-ui/core';

import Sidebar from 'components/sidebar/Sidebar';
import { default as Books } from './pages/books/BooksContainer';
import AddBook from './pages/book/pages/addBook/AddBook';
import EditBook from './pages/book/pages/editBook/EditBook';
import EditOrder from "./pages/order/editOrder/EditOrder";
import { default as Users } from './pages/users/UsersContainer';
import { default as UserDetails } from './pages/user/userDetails/UserDetailsContainer';
import { default as Categories } from './pages/categories/CategoriesContainer';
import AddCategory from './pages/category/addCategory/AddCategory';
import AddCoupon from './pages/coupon/pages/addCoupon/AddCoupon';
import EditCoupon from './pages/coupon/pages/editCoupon/EditCoupon';
import { default as Coupons } from './pages/coupons/CouponsContainer';

import { default as BookDetails } from './pages/book/pages/bookDetails/BookDetailsContainer';
import Orders from './pages/orders/OrdersContainer';
import Order from './pages/order/orderDetails/OrderDetailsContainer';
import useAdminPanelStyles from './AdminPanelStyles';

const AdminPanel = () => {
  const classes = useAdminPanelStyles();
  const location = useLocation();
  const history = useHistory();

  if (
    location.pathname === ADMIN_PAGE ||
    location.pathname === `${ADMIN_PAGE}/`
  ) {
    history.push(ADMIN_PAGE_ORDERS);
  }

  return (
    <Box className={classes.container} mb={4}>
      <Sidebar
        title={sidebar.title}
        items={sidebar.items}
        baseItemUrl={ADMIN_PAGE}
      />
      <Box className={classes.content}>
        <Switch>
          <Route exact path={[`${ADMIN_PAGE}`, `${ADMIN_PAGE_ORDERS}/:pageId?`]} component={Orders}/>
          <Route exact path={ADMIN_PAGE_ORDER_EDIT} component={EditOrder} />
          <Route exact path={`${ADMIN_PAGE_ORDER}/:pageId?`} component={Order}/>

          <Route exact path={`${ADMIN_PAGE_BOOKS}/:pageId?`} component={Books}/>
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
          <Route exact path={ADMIN_PAGE_ORDER_ADD} component={AddBook} />
          <Route
            exact
            path={`${ADMIN_PAGE_CATEGORIES}/:pageId?`}
            component={Categories}
          />
          <Route exact path={ADMIN_PAGE_CATEGORY_ADD} component={AddCategory} />
          <Route
            exact
            path={`${ADMIN_PAGE_COUPONS}/:pageId?`}
            component={Coupons}
          />
          <Route exact path={ADMIN_PAGE_COUPON_ADD} component={AddCoupon} />
          <Route exact path={ADMIN_PAGE_COUPON_EDIT} component={EditCoupon} />
        </Switch>
      </Box>
    </Box>
  );
};

export default AdminPanel;
