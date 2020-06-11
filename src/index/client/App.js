import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'global/styles/theme/theme';

import { getUserInfoAction } from '../../pages/login/actions/loginActions';
import PrivateRoute from '../../components/privateRoute/PrivateRoute';

import Navbar from '../../components/navbar/Navbar';
import Main from '../../pages/main/Main';
import Category from '../../pages/category/Category';
import Search from '../../pages/search/Search';
import Profile from '../../pages/profile/Profile';
import CartContainer from '../../pages/cart/CartContainer';
import NotFound from '../../pages/notFound/NotFound';
import AdminPanel from '../../pages/admin-panel/AdminPanel';

import BookContainer from '../../pages/book/BookContainer';
import LoginContainer from '../../pages/login/LoginContainer';
import RegisterContainer from '../../pages/register/RegisterContainer';

import styles from 'global/styles/global.scss';
import { getCategories } from '../../pages/category/slice/categoriesSlice';
import GlobalAlert from '../../components/globalAlert/globalAlert';
import OrderContainer from '../../pages/order/OrderContainer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAction());
    dispatch(getCategories());
  }, []);

  const DefaultContainer = () => {
    return (
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route path={'/book/:bookId'} component={BookContainer} />
        <Route path={'/category/:categoryId/:pageId?'} component={Category} />
        <Route path={'/search/:pageId?'} component={Search} />
        <Route path={'/order'} component={OrderContainer} />
        <Route path={'/cart'} component={CartContainer} />
        <PrivateRoute adminNeeded path={'/admin'} component={AdminPanel} />
        <PrivateRoute path={'/profile'} component={Profile} />
        <Route exact path={'*'} component={NotFound} />
      </Switch>
    );
  };

  const AuthContainer = () => (
    <Switch>
      <div className={styles.wrapperCenter}>
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />
      </div>
    </Switch>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Navbar />
        <Switch>
          <Route exact path={'/(login|register)/'} component={AuthContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
      <GlobalAlert />
    </ThemeProvider>
  );
};

export default App;

//TODO (NOW)

//ŻENI
//Book Page (/book/:bookId),
//Order Admin View (/admin/order/orderId)
//User ADmin View (/admin/user/userId)
//Book Admin View (/admin/book/bookId)
//(no admin route and page made yet, but we can work on single item view components)

//ERYK
//Cart Page (/cart)
//Order Page (sth like /cart/order)
//Payment Page (sth like /cart/order/payment or just modal?)

//DOMINIK
//ADMIN ROUTE (modify PrivateRoute or add new AdminRoute component)
//Book Preview, Order Preview (list's items)
//Pagination Component
//Main Page
//Category Page
//Search Page
//Sidebar (main)

//TODO (NEXT)
//Admin Page: users list (/admin/users), books list (/admin/books), orders list (/admin/orders)
//Admin Page: user/book/order previews (list's items)
//Admin Page: edit/add user/order/book pages (/admin/book/add, admin/book/edit etc)
//Admin Sidebar

//User Profile Page : /profile
//User Edit Profile Data Page :/profile/edit
//User Change Password Page :/user/change-password
//User Profile Sidebar

//TODO (FINALLY)
//UI STYLING
//RESPONSIVENESS

//-----DONE-------
